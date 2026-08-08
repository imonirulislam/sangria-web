import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 is wired through its Vite plugin (not the legacy @astrojs/tailwind
// integration); tokens live in src/styles/global.css via @theme.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
