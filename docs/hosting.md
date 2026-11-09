# Hosting

The site is a static Astro build served by **GitHub Pages** at
`https://www.gangfight.eu`. GitHub Pages redirects the apex domain
`gangfight.eu` to `www.gangfight.eu` on its own, as long as the custom domain is
`www.gangfight.eu` and the apex DNS records point at GitHub. Netlify is therefore
not needed.

## One-time setup (human)

1. Push the repository to `gangfight/gangfight-website`.
2. Repository settings → Pages → Source: **GitHub Actions**.
3. Pages → Custom domain: `www.gangfight.eu`, then enable **Enforce HTTPS** once
   the certificate is issued (can take up to an hour after the DNS is right).
   `public/CNAME` keeps the domain in every build.
4. DNS records (check the current addresses in the GitHub documentation
   "Managing a custom domain for your GitHub Pages site" before you enter them):

   | Name       | Type  | Value                                                                                      |
   | ---------- | ----- | ------------------------------------------------------------------------------------------ |
   | `www`      | CNAME | `gangfight.github.io.`                                                                     |
   | `@` (apex) | A     | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`                 |
   | `@` (apex) | AAAA  | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |

   If your DNS provider offers `ALIAS`/`ANAME` at the apex, `gangfight.github.io`
   works as well.

5. Optional: verify the domain in the organisation settings (Pages → Verified
   domains) so nobody else can take it over.
6. Add a `CAA` record for `letsencrypt.org` if you use CAA at all, GitHub issues
   its certificates there.

The game itself lives on `play.gangfight.eu`, the website only links to it (the
hero button still says "Launching soon" until the game is live). Point that name
at the cluster, not at GitHub Pages.

Every language has its own prefix (`/en/`, `/de/`); `/` redirects to `/en/` with a
meta refresh page, so no server rule is needed.

## Deployment

`pages.yml` builds with `task check` and deploys `dist/` on every push to
`master`. `general.yml` runs the same check on pull requests.

## If GitHub Pages stops fitting

Netlify (or any static host) works with the same build: `task build`, publish
`dist/`, and set a redirect `https://gangfight.eu/* → https://www.gangfight.eu/:splat 301`.
