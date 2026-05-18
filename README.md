# danidev-website

Personal website of Daniel A. Esteban — Tech Lead specializing in payment infrastructure and distributed systems.

Built as a static, bilingual (EN/ES) site with a dark theme and a minimal footprint.

## Stack

| Layer | Choice |
|---|---|
| Framework | [Nuxt 4](https://nuxt.com) |
| i18n | [@nuxtjs/i18n](https://i18n.nuxtjs.org) — `en` / `es`, browser-language detection |
| Fonts | [Geist & Geist Mono](https://vercel.com/font) via `@nuxtjs/google-fonts` |
| Images | `@nuxt/image` |
| Styling | Vanilla CSS with design tokens (`tokens.css`) |
| Package manager | [pnpm](https://pnpm.io) |
| Deployment | Docker · self-hosted via [Coolify](https://coolify.io) |

## Project structure

```
app/
  assets/css/     # Design tokens, base styles, component CSS
  components/     # Hero, About, Experience, Expertise sections
  composables/    # useAccent — dynamic accent-color composable
  pages/          # index.vue (prerendered)
i18n/
  locales/
    en.json       # English strings
    es.json       # Spanish strings
public/           # Static assets
articles/         # Writing / notes (local markdown)
Dockerfile        # Production container
nuxt.config.ts
```

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & preview

```bash
pnpm build
pnpm preview
```

## Deployment

The site ships as a Node.js server inside a Docker container and is deployed via Coolify.

```bash
docker build -t danidev-website .
docker run -p 3000:3000 danidev-website
```

## Localization

Locale files live in `i18n/locales/`. Add or update keys in both `en.json` and `es.json` to keep both languages in sync. The active locale is detected from the browser and persisted in a cookie (`i18n_lang`).

## Linting & type-checking

```bash
pnpm lint
pnpm typecheck
```
