// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { editorialGuides, guideHref } from './src/data/editorial-guides';

// Actual content revisions, not build dates. Update only when the page changes materially.
const revisedCities = ['miami', 'fort-lauderdale', 'west-palm-beach', 'boca-raton', 'orlando', 'kissimmee', 'daytona-beach', 'lakeland', 'tampa', 'fort-myers', 'cape-coral', 'naples', 'jacksonville', 'los-angeles', 'san-francisco', 'san-diego', 'sacramento'];
const restoredPaths = new Set(['/', '/company/', '/contact/', '/free-claim-review/', '/service-areas/', '/services/', '/terms-of-service/', '/resources/claim-review-guide/', '/es/guia-reclamacion/', '/services/water-damage/', '/services/fire-damage/', '/services/roof-damage/', '/services/mold-claims/', '/services/hurricane-damage/', '/services/denied-claims/', ...['los-angeles', 'sacramento', 'san-diego', 'san-francisco'].map(city => `/service-areas/${city}/`)]);
const revisedPaths = new Set(['/', '/privacy-policy/', '/company/', '/service-areas/north-carolina/', '/resources/', '/services/denied-claims/', '/services/mold-claims/', '/services/roof-damage/', '/services/hurricane-damage/', ...['charlotte', 'raleigh', 'wilmington', 'asheville', 'fayetteville', 'jacksonville-nc'].map(city => `/service-areas/north-carolina/${city}/`), '/services/fire-damage/', '/services/water-damage/', ...revisedCities.map(city => `/service-areas/${city}/`)]);

const strategyPaths = new Set([
  '/', '/services/', '/resources/', '/resources/claim-review-guide/', '/service-areas/', '/service-areas/florida/', '/service-areas/california/',
  ...revisedCities.map(city => `/service-areas/${city}/`),
  ...['charlotte', 'raleigh', 'wilmington', 'asheville', 'fayetteville', 'jacksonville-nc', 'denied-insurance-claim-nc'].map(slug => `/service-areas/north-carolina/${slug}/`),
  ...['water-damage', 'fire-damage', 'roof-damage', 'mold-claims', 'hurricane-damage', 'denied-claims'].map(service => `/services/${service}/`),
  ...editorialGuides.map(guide => guideHref(guide.slug)),
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://allclaimguardians.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/free-claim-review/thank-you/'),
      // Asegura que el sitemap liste las URLs canónicas CON barra final
      serialize(item) {
        if (!item.url.endsWith('/')) item.url += '/';
        item.lastmod = strategyPaths.has(new URL(item.url).pathname) ? '2026-11-25' : restoredPaths.has(new URL(item.url).pathname) ? '2026-11-19' : revisedPaths.has(new URL(item.url).pathname) ? '2026-11-18' : '2026-10-19';
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
