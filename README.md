# Personal Website

Elsa Cai's personal website — a single-page editorial index built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Most content lives in plain data files (`src/data/`) so it's easy to update
without touching layout code.

## Prerequisites

[Node.js](https://nodejs.org) 22.12 or newer.

> On this machine, Node lives at `~/.local/node/bin` and isn't on the default
> PATH. Start each terminal session with:
> ```sh
> export PATH="$HOME/.local/node/bin:$PATH"
> ```

## Getting started

```sh
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:4321
```

## Commands

| Command           | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the production build locally       |

## Project structure

```
src/
  data/          ← edit these to change content (plain TypeScript)
    socialLinks.ts   your linkedin / x / instagram / email
    now.ts           the "currently" section
    projects.ts      "selected work" entries
    building.ts      "things i'm building" entries + statuses
    principles.ts    "things i believe"
  components/    Reusable pieces (Header, Intro, Section, ProjectRow,
                 WorkEntry, StatusBadge, SocialLinks, Footer)
  layouts/       BaseLayout — shared HTML shell, <head>, SEO + fonts
  pages/         index.astro — the single page (assembles all sections)
  styles/        global.css — theme tokens (colors + fonts) and base styles
public/          Static files served as-is (favicon, images, og image)
astro.config.mjs Site config (domain) + Tailwind plugin
```

## How to edit

**Most edits = edit a file in `src/data/`.** They're typed lists; change the
text, add an entry, reorder, done.

- **Change what you do / build / believe:** edit `projects.ts`, `building.ts`,
  `principles.ts`, `now.ts`.
- **Update your links:** edit `src/data/socialLinks.ts`.
- **Reword the intro:** edit `src/components/Intro.astro`.
- **Restyle (colors, fonts):** edit the `@theme` tokens at the top of
  `src/styles/global.css`.
- **Edit the nav:** the `links` array in `src/components/Header.astro`.
- **Add a real page later** (e.g. `/now`, `/work`): create
  `src/pages/now.astro`. The filename becomes the URL.

### Placeholders to fill in

These are intentionally left as placeholders until you have verified info:

- **Social handles** in `src/data/socialLinks.ts` (currently best-guess URLs).
- **Metrics** — growth %, event attendance, social reach, follower counts.
  They only appear once you add approved, publicly shareable numbers (see the
  `placeholders` fields in `projects.ts` and the note in `index.astro`).
- **Social preview image** — drop an `og.png` into `public/` for nicer link
  previews.

## Deploying

The built site is fully static (`npm run build` → `./dist/`). It can be hosted
free on GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
