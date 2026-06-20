# Personal Website

My personal website, built with [Astro](https://astro.build).

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
  components/    Reusable pieces (Nav, Footer)
  layouts/       BaseLayout — the shared HTML shell every page uses
  pages/         One file per route (index → /, about → /about, ...)
  styles/        global.css — design tokens and all styling
public/          Static files served as-is (favicon, images, etc.)
astro.config.mjs Site config — set your real domain in `site`
```

## How to edit

- **Add a page:** create a new `.astro` file in `src/pages/`. The filename
  becomes the URL (`src/pages/notes.astro` → `/notes`).
- **Change content:** edit the page files in `src/pages/`. They're mostly plain
  HTML.
- **Restyle:** edit the CSS variables at the top of `src/styles/global.css`.
- **Update nav:** edit the `links` array in `src/components/Nav.astro`.

Search the codebase for `Elsa`, `elsa@ditto.ai`, and `elsa-crypto` to find the
placeholders to replace with your real details.

## Deploying

The built site is fully static (`npm run build` → `./dist/`). It can be hosted
free on GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
