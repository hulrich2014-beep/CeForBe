// Rate-limiting en mémoire, suffisant pour un déploiement mono-instance.
// Pour un déploiement serverless multi-instances, remplacer par un compteur
// partagé (Upstash Redis, table PostgreSQL...).

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 5000;

function purgeExpired(now: number) {
  if (buckets.size < MAX_BUCKETS) return;
  Array.from(buckets.entries()).forEach(([key, bucket]) => {
    if (bucket.resetAt < now) buckets.delete(key);
  });
}

/**
 * Retourne true si la requête est autorisée, false si la limite est atteinte.
 * Par défaut : 5 requêtes par heure et par clé (IP + route).
 */
export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  purgeExpired(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

/** Extrait l'adresse IP cliente d'une requête (derrière un proxy ou non). */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return headers.get('x-real-ip') ?? 'unknown';
}
