# Hamid Zoghi — Portfolio

My personal portfolio site — front-end and custom WordPress dev. It's bilingual (English/Persian), fully RTL/LTR aware, built with Next.js 16 and Tailwind CSS v4, and exported as a static site so it doesn't need a server to run.

## Stack

- **Next.js 16** — App Router, static export (`output: "export"`)
- **Tailwind CSS v4** — CSS-first `@theme` config, see `src/app/globals.css`
- **TypeScript**

I didn't bring in an i18n library for this — locale routing and the dictionaries are handled by hand (details below). Keeps things simple and there's less to break.

Heads up if you're poking around the Next.js internals: 16 is pretty new, so some APIs and conventions changed from what you might be used to. `node_modules/next/dist/docs/` is worth checking if something looks unfamiliar.

## Getting started

```bash
npm install
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000) — it redirects to `/en` automatically.

```bash
npm run build           # static export → out/ (root path, for Vercel or a custom domain)
npm run build:gh-pages  # static export → out/ (prefixed with /portfolio, for GitHub Pages)
npm run start           # preview the exported out/ folder locally
npm run lint             # ESLint
```

## Project structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx     # root layout — sets <html lang/dir>, loads fonts, metadata
│   │   └── page.tsx       # assembles all sections for a given locale
│   └── globals.css        # design tokens (colors, fonts) via Tailwind's @theme
├── components/            # one file per section (Hero, Work, Journey, ...)
├── dictionaries/
│   ├── en.ts               # all English copy
│   ├── fa.ts               # all Persian copy (typed against en.ts)
│   └── index.ts             # loader used by Server Components
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

Everything text-wise lives in `src/dictionaries/en.ts` and `src/dictionaries/fa.ts`. Both share one TypeScript type (`Dictionary`, inferred from `en.ts`) — add a field to one file and TypeScript will complain the other one is missing it. Hard to accidentally ship a page where a locale's content is incomplete.

To add a project to Selected Work: add an entry to `work.projects` in both dictionary files (same shape, translated), drop the screenshot into `public/images/`. No component code to touch.

To change design tokens (colors, fonts, container width), edit the `@theme` block in `src/app/globals.css`.

## Deployment

### GitHub Pages (already set up)

Push to `main` and `.github/workflows/deploy.yml` builds and publishes it. One-time setup: go to the repo's Settings → Pages and set Source to GitHub Actions instead of "Deploy from a branch." Once that first run finishes, it's live at `https://<username>.github.io/<repo-name>/`.

The build sets `GITHUB_PAGES=true`, which makes `next.config.ts` prefix every route and asset with `/<repo-name>` (see `src/lib/base-path.ts`) so links still resolve at that sub-path. Rename the repo and you'll need to update `basePath` there too.

### Vercel

Works fine there too since it's a static export — import the repo, keep the defaults, deploy. Just run plain `npm run build` (skip the `GITHUB_PAGES` flag) for a root-path deploy. Both setups live side by side, no code changes needed either way.

## RTL / LTR

`/fa` renders with `dir="rtl"` on `<html>`, `/en` with `dir="ltr"`. The layout mirrors on its own because I used Tailwind's logical spacing utilities (`ps-*`, `pe-*`, `start-*`, `end-*`, `border-s-*`) everywhere instead of physical `left`/`right` — so the whole thing flips, not just the text.
