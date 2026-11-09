import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.gangfight.eu',
  trailingSlash: 'always',

  build: {
    format: 'directory',
  },

  redirects: {
    '/': '/en/',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
        },
      },
    }),
  ],
})
