// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Custom domain (served via GitHub Pages). The public/CNAME file points
  // Pages at this domain.
  site: "https://elsacai.com",

  vite: {
    plugins: [tailwindcss()],
  },
});