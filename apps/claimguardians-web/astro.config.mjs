// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://allclaimguardians.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      // Asegura que el sitemap liste las URLs canónicas CON barra final
      serialize(item) {
        if (!item.url.endsWith('/')) item.url += '/';
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
