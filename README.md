# sangria-web

Marketing site for **Sangria** — an open, self-hostable team-chat app. Live at
**[sangria.chat](https://sangria.chat)**.

A fast, static, multi-page site: hero with an animated product mock, a features
bento, live-looking huddle/poll/thread showcases, an OS-aware download page, and
a features deep-dive. No screenshots — the app UI is rebuilt in HTML/CSS so it
stays crisp at any size and matches the real app's design.

## Tech stack

- **[Astro](https://astro.build) 7** — static output, zero JS shipped by default.
- **Plain `.astro` + vanilla TS** — no React/Vue/Svelte. Interactivity is small
  `<script>` islands (`src/scripts/`).
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (`@import "tailwindcss"`
  + `@theme` tokens in `src/styles/global.css`) — no `tailwind.config`.
- **[simple-icons](https://simpleicons.org)** — brand logos, inlined at build time.
- **Inter** (`@fontsource-variable/inter`) + `@astrojs/sitemap`.
- Dark mode via a `data-theme` attribute set by a pre-paint inline script.

## Quick start

```bash
bun install
bun run dev        # http://localhost:4321
```

## Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Dev server with HMR |
| `bun run build` | Static build to `dist/` |
| `bun run preview` | Preview the built site locally |
| `bun run check` | `astro check` (type-check `.astro`) |
| `bun run deploy` | Build + deploy to Cloudflare (`wrangler deploy`) |
| `bun run cf:preview` | Build + run the Worker locally (`wrangler dev`) |

## Project structure

```
src/
  pages/        index / features / download / 404
  layouts/      Base.astro — <head>, SEO/OG meta, Nav + Footer, pre-paint theme
  components/
    Nav, Footer, ThemeToggle, Icon (inline lucide-style set)
    ChatMock, ThreadMock, HuddleMock, PollMock, SearchMock, Composer, MockFrame
    FeatureCard, DownloadCard, StackStrip, Faq, HeroTiles
  data/content.ts   single source for site copy: nav, features, FAQ, platforms…
  scripts/          vanilla-TS islands: os-detect, reveal (scroll-in),
                    poll-anim, chat-anim
  styles/global.css Tailwind entry + @theme tokens + utilities
public/             icon.svg, favicon.ico, apple-icon.png, robots.txt
```

The `*Mock` components are hand-built replicas of the actual app UI (mirroring its
sidebar themes, avatars, reaction pills, composer, etc.), lightly animated so the
chat/poll/huddle demos feel alive.

## Deployment

Static site hosted on **Cloudflare Workers (Static Assets)** — `dist/` is served
directly, no server code. Config in `wrangler.jsonc`.

```bash
bun run deploy     # astro build && wrangler deploy
```

After the first deploy, attach the custom domain (`sangria.chat`) to the Worker in
the Cloudflare dashboard. The production domain lives in `astro.config.mjs` (`site`)
— canonical URLs, `og:url`, and the sitemap are derived from it.

## Related

- **App:** the Sangria app itself (Next.js + Convex).
- **Docs:** `docs.sangria.chat` (Fumadocs).
