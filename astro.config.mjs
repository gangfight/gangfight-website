import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// The site is served at https://www.gangfight.eu by GitHub Pages; the apex
// domain gangfight.eu redirects there (see docs/hosting.md).
export default defineConfig({
  site: 'https://www.gangfight.eu',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // GitHub Pages has no server side redirects, Astro writes a page with a
  // meta refresh for the root.
  redirects: { '/': '/en/' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de' } },
    }),
  ],
})
