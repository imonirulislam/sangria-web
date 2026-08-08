import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// NOTE: set `site` to the real production domain — canonical URLs, og:url, and
// the generated sitemap are all derived from it.
export default defineConfig({
  site: "https://sangria.chat",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
