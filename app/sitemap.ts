import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ceforbe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/formations', priority: 0.9 },
    { path: '/planning', priority: 0.7 },
    { path: '/a-propos', priority: 0.6 },
    { path: '/historique', priority: 0.5 },
    { path: '/contact', priority: 0.8 },
    { path: '/mentions-legales', priority: 0.2 },
    { path: '/politique-de-confidentialite', priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
