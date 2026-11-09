# Gangfight website — Agent Guide

Static marketing site for `www.gangfight.eu` (Astro 6, TypeScript strict). The
rules of the workspace `AGENTS.md` apply: never push, never create branches, tags
or PRs, commit only when working an agentic-loop task, stage explicit paths, no
`--no-verify`/`--amend`, never print secrets.

- `task check` is the only done signal.
- Texts live in `src/i18n/{en,de}.ts`; every text exists in both languages.
- No cookies, analytics, third-party scripts, fonts or images without a human
  decision (privacy page and the "no consent banner" promise depend on it).
- Legal pages are templates; never invent operator data, keep the placeholders.
- Do not describe features the game does not have; copy follows `ABSTRACT.md`
  and `SPEC.md`. Dates and prices appear nowhere until a human fixes them.
- Dependencies are pinned exactly; do not bump Astro to 7 (see README).
