// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Your live URL on GitHub Pages (a user page → clean root domain).
  // If your GitHub username isn't "elsa-crypto", update this to match.
  site: "https://elsa-crypto.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});