// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      // font-light / body / font-bold. Upright only: the one italic in the UI
      // (the log labels on the index) isn't worth a preloaded 50KB face.
      weights: [300, 400, 700],
      styles: ["normal"],
    },
    {
      // Body serif, 400 upright + italic for prose emphasis.
      provider: fontProviders.fontsource(),
      name: "Crimson Text",
      cssVariable: "--font-crimson-text",
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      // font-extralight dates / font-light menu. No italic mono in the UI.
      weights: [200, 300],
      styles: ["normal"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
