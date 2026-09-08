# Hamid Zoghi — Portfolio

Personal portfolio site for Hamid Zoghi (Front-End & Custom WordPress Developer).
Bilingual (English / Persian), fully RTL/LTR aware, built with Next.js 16 and Tailwind CSS v4.

## Tech stack

- **Next.js 16** (App Router, Turbopack, static export via `generateStaticParams`)
- **Tailwind CSS v4** (CSS-first `@theme` config — see `src/app/globals.css`)
- **TypeScript**
- No external i18n library — locale routing and dictionaries are handled manually (see below), which keeps the project dependency-light and easy to follow.

> **Note on Next.js 16:** this is a very new major version. If you (or an AI assistant) run into unfamiliar APIs, check `node_modules/next/dist/docs/` first — some conventions changed from earlier versions (e.g. `middleware.ts` is now `proxy.ts`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/en` automatically.

```bash
npm run build   # production build (statically generates /en and /fa)
npm run start   # serve the production build
npm run lint    # ESLint
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
├── lib/
│   └── i18n-config.ts       # supported locales + ltr/rtl mapping
└── proxy.ts                  # redirects "/" → "/en" (Next 16's renamed middleware)
public/
└── images/                   # optimized WebP screenshots + headshot
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

This is a standard Next.js app — the easiest path is [Vercel](https://vercel.com/new):
push this project to a GitHub repo and import it on Vercel, no configuration needed.

It can also be self-hosted with `npm run build && npm run start` behind any Node host, since
it does not use any Vercel-specific features.

## RTL / LTR

Persian (`/fa`) renders with `dir="rtl"` on `<html>`, English (`/en`) with `dir="ltr"`.
Layout mirrors automatically because spacing/positioning utilities throughout the components
use Tailwind's logical properties (`ps-*`, `pe-*`, `start-*`, `end-*`, `border-s-*`) instead of
physical `left`/`right` ones — so the whole layout flips, not just text alignment.
