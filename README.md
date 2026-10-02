# ECOGS Gornji Slaveči — website

Website of the Evangeličanska cerkvena občina Gornji Slaveči, built with
Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run build`     | Production build (fully static)  |
| `npm run lint`      | ESLint                           |
| `npm run typecheck` | TypeScript                       |
| `npm run format`    | Prettier (+ Tailwind class sort) |

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, Open Graph,
sitemap and share links use the real domain.

## Structure

```
src/
  app/                  Routes (each page composes sections)
    novice/[slug]/      Article pages, statically generated
    kontakt/actions.ts  Contact form Server Action
    sitemap.ts, robots.ts
  components/
    layout/             Header, mobile menu, footer
    motion/             Scroll reveal/parallax driver, reading progress
    news/               Article cards, archive, article body, sharing
    sections/<page>/    Page-specific sections
    ui/                 Design-system primitives (Button, Container, …)
  content/              Typed site content (CMS-ready data)
  lib/                  Data access, formatting and helpers
  assets/               Photos and logos (statically imported)
```

### Conventions

- **Server Components by default.** Only interactive pieces are client
  components: header/menu, community-life switcher, news filter, share
  buttons, contact form and the motion driver.
- **Content is data.** All copy that changes over time lives in
  `src/content`. Pages read news only through `src/lib/news.ts`, so moving
  articles to a CMS means changing that one file.
- **Design tokens** (colours, easing, the `nav` 860px breakpoint) are defined
  once in `src/app/globals.css` under `@theme`.
- **Animations are declarative.** Spread `reveal("up", delay)` or
  `parallax(speed)` from `src/lib/reveal.ts` onto any element; a single
  `<MotionEffects />` handles every page. Content stays visible without
  JavaScript and with `prefers-reduced-motion`.
- **News filter state lives in the URL** (`/novice?kategorija=mladina`), so
  filtered views can be shared.

## Open items

- **Contact form delivery:** `src/app/kontakt/actions.ts` validates and logs
  messages; connect an email provider in `deliverContactMessage`.
- **Pastor photo:** pass `photo` to `<PastorSection />` once available.
- **Privacy / cookie pages:** footer links in `src/content/site.ts` point to
  `/` until those pages exist.
