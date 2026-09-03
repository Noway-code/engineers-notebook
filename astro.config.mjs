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
      weights: [400, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Crimson Text",
      cssVariable: "--font-crimson-text",
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      weights: [50, 100, 200, 300, 500, 900],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
