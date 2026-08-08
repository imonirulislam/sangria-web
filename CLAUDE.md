# Working in this repo

`sangria-web` — the marketing site for Sangria (an open team-chat app), live at
**sangria.chat**. Static **Astro 7** site, **plain `.astro` + vanilla TS** (no
React/Vue/Svelte), **Tailwind CSS v4** via `@tailwindcss/vite`. Package manager is
**bun**. Deployed to Cloudflare Workers (Static Assets).

## Verify before you finish

```bash
bun run build      # static build — must succeed (the deploy gate)
bun run check      # astro check (type-check .astro) for non-trivial changes
```

## Conventions

- **No UI framework.** Components are `.astro`; interactivity is small vanilla-TS
  islands in `src/scripts/` imported via `<script>`. Don't add React et al.
- **Tailwind v4, no config file.** Design tokens live in `src/styles/global.css`
  (`@theme`) — the wine/burgundy `brand-*` scale + `citrus-*` accent. Dark mode is
  the `dark:` variant driven by `data-theme` on `<html>` (set pre-paint in
  `Base.astro`). Style **both** light and dark.
- **Mobile-responsive is required.** Every page must work at phone widths — grids
  collapse to one column, nothing scrolls sideways (the body is `overflow-x-clip`
  so decorative glows can't cause horizontal scroll). Check narrow viewports.
- **Content lives in `src/data/content.ts`** — copy, nav, features, FAQ, platforms.
  Edit there, not inline, so pages stay declarative.
- **The `*Mock` components mirror the real app's UI** (sidebar themes, avatars,
  reaction pills, composer). Keep them faithful to the app when it changes.
- **SEO:** `Base.astro` owns `<title>`/description, canonical, and OG/Twitter meta;
  the production domain is `site` in `astro.config.mjs` (drives canonical + sitemap).

## Commits

- Imperative subject; **no `Co-Authored-By` trailer**.
- Describe behavior; don't name other products in comments/commits.
- Secrets never committed. **Commit/push only when asked.**
