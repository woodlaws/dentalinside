import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = [
  '/',
  '/about',
  '/services',
  '/services/naver-place',
  '/services/dental-content',
  '/services/shorts-youtube',
  '/services/profile-photo',
  '/services/aeo-geo',
  '/services/patient-funnel',
  '/services/ads',
  '/services/website-consulting',
  '/cases',
  '/process',
  '/insights',
  '/contact'
];

const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:5173')
).replace(/\/$/, '');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve('dist/sitemap.xml'), sitemap, 'utf8');
writeFileSync(
  resolve('dist/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  'utf8'
);
