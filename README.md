# Hamid Zoghi — Portfolio

Personal portfolio site for Hamid Zoghi (Front-End & Custom WordPress Developer).
Bilingual (English / Persian), fully RTL/LTR aware, built with Next.js 16 and Tailwind CSS v4,
and exported as a fully static site (no server required to run it).

## Tech stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **Tailwind CSS v4** (CSS-first `@theme` config — see `src/app/globals.css`)
- **TypeScript**
- No external i18n library — locale routing and dictionaries are handled manually (see below), which keeps the project dependency-light and easy to follow.

> **Note on Next.js 16:** this is a very new major version. If you (or an AI assistant) run into unfamiliar APIs, check `node_modules/next/dist/docs/` first — some conventions changed from earlier versions.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/en` automatically.

```bash
npm run build           # static export → out/ (root path, for Vercel or a custom domain)
npm run build:gh-pages  # static export → out/ (prefixed with /portfolio, for GitHub Pages)
npm run start            # preview the exported out/ folder locally
npm run lint              # ESLint
```

## Project structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx     # root layout — sets <html lang/dir>, loads fonts, metadata
│   │   └── page.tsx        # assembles all sections for a given locale
│   └── globals.css         # design tokens (colors, fonts) via Tailwind's @theme
├── components/              # one file per section (Hero, Work, Journey, ...)
├── dictionaries/
│   ├── en.ts                # all English copy
│   ├── fa.ts                # all Persian copy (typed against en.ts, so nothing can be missed)
│   └── index.ts              # loader used by Server Components
└── lib/
    ├── i18n-config.ts       # supported locales + ltr/rtl mapping
    └── base-path.ts          # GitHub Pages sub-path helper (see Deployment)
public/
├── images/                   # optimized WebP screenshots + headshot
├── index.html                 # static "/" → "/en/" redirect (relative URL, works at any sub-path)
└── .nojekyll                  # tells GitHub Pages not to run Jekyll over the _next/ folder
.github/workflows/deploy.yml   # builds + deploys to GitHub Pages on every push to main
```

## Editing content

All text lives in `src/dictionaries/en.ts` and `src/dictionaries/fa.ts`. Both files share
the same TypeScript type (`Dictionary`, inferred from `en.ts`), so if you add a field to one
language, TypeScript will immediately flag the other file as incomplete — it's not possible
to accidentally ship a page where one locale is missing content.

**To add a new project** to Selected Work, add an entry to `work.projects` in *both*
dictionary files (same shape, translated), and drop the screenshot in `public/images/`.
No component code needs to change.

**To edit design tokens** (colors, fonts, spacing container width), edit the `@theme` block
in `src/app/globals.css`.

## Deployment

### GitHub Pages (automatic, already set up)

Push to the `main` branch and the workflow in `.github/workflows/deploy.yml` builds and
publishes the site automatically. One-time setup: in the repo's **Settings → Pages**, set
**Source** to **GitHub Actions** (not "Deploy from a branch"). After the first successful run,
the site is live at `https://<username>.github.io/<repo-name>/`.

The build sets `GITHUB_PAGES=true`, which makes `next.config.ts` prefix every route and asset
with `/<repo-name>` (see `src/lib/base-path.ts`) so links resolve correctly at that sub-path.
If the repo is ever renamed, update `basePath` in `src/lib/base-path.ts` to match.

### Vercel (alternative)

Since the app is a static export, it also deploys cleanly to
[Vercel](https://vercel.com/new) or any static host: import the repo, leave settings on
their defaults, deploy. Run the plain `npm run build` (no `GITHUB_PAGES` flag) for a root-path
deployment — no code changes needed either way, both configurations live side by side.

## RTL / LTR

Persian (`/fa`) renders with `dir="rtl"` on `<html>`, English (`/en`) with `dir="ltr"`.
Layout mirrors automatically because spacing/positioning utilities throughout the components
use Tailwind's logical properties (`ps-*`, `pe-*`, `start-*`, `end-*`, `border-s-*`) instead of
physical `left`/`right` ones — so the whole layout flips, not just text alignment.
