# Site CeForBE — Centre de Formation Biblique Esdras

Site Next.js 14 (App Router) + Tailwind CSS + Prisma (MySQL — base incluse dans l'hébergement LWS).

## ⚠️ Sécurité

L'ancienne base PostgreSQL temporaire (dont le mot de passe avait circulé avec ce
dossier) a été **abandonnée** : le projet utilise désormais la base MySQL de votre
hébergement LWS (voir « Déploiement »). Le fichier `.env` contient des secrets :
il ne doit jamais être versionné ni partagé (il est dans `.gitignore`).

## Installation

```bash
# Prérequis : Node.js 18+ (https://nodejs.org)
cd nextjs_space
cp .env.example .env        # puis remplir les valeurs
yarn install                # ou : npm install
yarn prisma generate        # génère le client Prisma
yarn prisma db push         # crée les tables si besoin
yarn dev                    # http://localhost:3000
```

## Vérification avant déploiement

```bash
yarn build                  # doit se terminer sans erreur TypeScript
```

## Configuration (.env)

| Variable | Rôle |
|---|---|
| `DATABASE_URL` | Connexion MySQL LWS (inscriptions + messages) |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (sitemap, canoniques, Open Graph) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Serveur d'envoi des notifications e-mail. Avec Gmail : `smtp.gmail.com` / `465` / adresse Gmail / **mot de passe d'application** (myaccount.google.com/apppasswords) |
| `MAIL_FROM` | Expéditeur affiché des e-mails |
| `MAIL_TO` | Adresse du secrétariat qui reçoit les notifications |
| `ADMIN_EXPORT_TOKEN` | Jeton (longue chaîne aléatoire) protégeant l'export CSV |

Sans SMTP configuré, le site fonctionne : les inscriptions/messages sont enregistrés
en base, mais aucun e-mail n'est envoyé (un avertissement apparaît dans les logs).

## Consulter les inscriptions et messages (export CSV)

Une fois `ADMIN_EXPORT_TOKEN` défini, ouvrir dans un navigateur :

- `https://votre-site/api/admin/export?type=inscriptions&token=VOTRE_JETON`
- `https://votre-site/api/admin/export?type=contacts&token=VOTRE_JETON`

Le fichier CSV (séparateur `;`, compatible Excel) se télécharge. Ne partagez le jeton
qu'avec les personnes autorisées.

## Protections en place

- Validation serveur stricte des formulaires (Zod) avec longueurs bornées.
- Honeypot anti-robots + rate-limiting (5 envois/heure/IP) sur les deux formulaires.
- Case de consentement obligatoire + page politique de confidentialité (loi n°2017-20 / APDP).
- En-têtes de sécurité HTTP (HSTS, nosniff, X-Frame-Options, Referrer-Policy).
- Notifications e-mail : au secrétariat + accusé de réception au candidat.
- SEO : metadata par page, sitemap.xml, robots.txt, données structurées JSON-LD.
- Accessibilité : labels liés aux champs, skip-link, focus visible, `prefers-reduced-motion`,
  menu mobile avec `aria-expanded` et fermeture par Échap.
- Responsive : optimisation d'images Next.js activée, grilles et typographies adaptées
  mobile/tablette/desktop, bouton WhatsApp flottant.

## Déploiement recommandé (avec LWS)

Ce site est une application Next.js **avec serveur** (formulaires, base de données,
e-mails). L'hébergement mutualisé PHP de LWS ne peut pas l'exécuter tel quel :
un export statique casserait les formulaires. Répartition recommandée :

### 1. Chez LWS : domaine + e-mail professionnel
- Réserver le domaine (ex. `ceforbe.com`) chez LWS.
- Créer une boîte `contact@ceforbe.com` dans le Panel LWS, et utiliser ses
  identifiants SMTP dans `.env` (voir `.env.example`) : les notifications des
  formulaires partiront d'une adresse professionnelle, pas d'un Gmail.
- Vérifier dans le Panel LWS que SPF est actif (et DKIM si proposé) pour que
  les e-mails n'arrivent pas en spam.

### 2. L'application : Vercel (gratuit)
1. Créer un compte sur vercel.com et importer le dossier `nextjs_space`
   (via un dépôt GitHub, le plus simple).
2. Dans les réglages du projet Vercel, définir toutes les variables de `.env`.
3. Déployer, puis dans « Domains », ajouter `ceforbe.com`.
4. Dans la zone DNS du Panel LWS, créer :
   - un enregistrement **A** : `@` → `76.76.21.21`
   - un enregistrement **CNAME** : `www` → `cname.vercel-dns.com`
5. Le HTTPS est automatique. Mettre à jour `NEXT_PUBLIC_SITE_URL` avec l'URL définitive.

### 3. La base de données : MySQL chez LWS
Le projet est configuré pour MySQL (`prisma/schema.prisma`), inclus dans votre offre LWS :
1. Dans le Panel LWS, rubrique **MySQL** : « Cliquez ici pour créer une base MySql ».
   Noter le nom de la base, l'utilisateur, le mot de passe et l'« Ip serveur » affiché.
2. Dans `.env` (et dans les variables Vercel), renseigner :
   `DATABASE_URL="mysql://UTILISATEUR:MOTDEPASSE@IP_SERVEUR:3306/NOM_BASE"`
3. Créer les tables : `npx prisma db push` (une seule fois, depuis ce dossier).
4. Sur Vercel, choisir la région **Paris (cdg1)** dans les réglages du projet pour
   minimiser la latence vers les serveurs LWS (France).

Astuce : les inscriptions sont aussi consultables via phpMyAdmin dans le Panel LWS
(table `inscriptions`), en plus de l'export CSV décrit plus haut.

### Alternative « tout chez LWS » : VPS
Un VPS LWS permet d'héberger l'application et PostgreSQL au même endroit
(Node 18+, `yarn build`, PM2 pour maintenir `yarn start`, Nginx en reverse proxy,
certificat Let's Encrypt). À réserver si vous voulez tout centraliser : coût et
maintenance serveur plus élevés que l'option Vercel.

Après la mise en ligne : créer la fiche **Google Business Profile** du centre
pour le référencement local.
