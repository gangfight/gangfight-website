# gangfight-website

The official website of Gangfight, [www.gangfight.eu](https://www.gangfight.eu):
a small static [Astro](https://astro.build) site with teaser content in English
and German. It contains no game logic and talks to no API.

```bash
mise trust && mise install   # tools: node, task, prek, gh
task install                 # npm ci
task dev                     # http://localhost:4321
task check                   # fmt:check, lint (astro check), build — the only "done" signal
```

- Copy lives in `src/i18n/en.ts` and `src/i18n/de.ts` (the type of the German file
  is the type of the English one, so a missing text fails `task lint`).
- Every language has its own URL prefix: `/en/` and `/de/`. `/` redirects to `/en/`
  (a meta refresh page, GitHub Pages has no server side redirects). A new language
  is a new file in `src/i18n`, an entry in `locales` and a folder in `src/pages`.
- The imprint, privacy and terms pages are **templates with placeholders**: they
  need the operator data and a legal review before launch.
- The site sets no cookies and loads nothing from third parties; keep it that way
  (then no consent banner is needed).
- Hosting and DNS: [docs/hosting.md](docs/hosting.md).

## Astro version

Astro is pinned to 6.x on purpose: Astro 7 ships a native compiler that needs
newer CPU instructions (AVX2) and crashes with "Illegal instruction" on older
development machines. Move to 7 when every machine that builds the site runs it.

Licensed under the [Apache License 2.0](LICENSE).
