import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = process.cwd();
const routes = [
  ['home', 'index.html'],
  ['about', 'about/index.html'],
  ['services', 'services/index.html'],
  ['services-naver-place', 'services/naver-place/index.html'],
  ['services-dental-content', 'services/dental-content/index.html'],
  ['services-shorts-youtube', 'services/shorts-youtube/index.html'],
  ['services-profile-photo', 'services/profile-photo/index.html'],
  ['services-aeo-geo', 'services/aeo-geo/index.html'],
  ['services-patient-funnel', 'services/patient-funnel/index.html'],
  ['services-ads', 'services/ads/index.html'],
  ['services-website-consulting', 'services/website-consulting/index.html'],
  ['cases', 'cases/index.html'],
  ['process', 'process/index.html'],
  ['insights', 'insights/index.html'],
  ['contact', 'contact/index.html']
];

const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:5173')
).replace(/\/$/, '');

export default defineConfig({
  plugins: [
    {
      name: 'dentalinside-site-url',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_URL__', siteUrl);
      }
    }
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        routes.map(([name, file]) => [name, resolve(root, file)])
      )
    }
  }
});
