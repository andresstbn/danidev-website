# Handoff · Daniel A. Esteban — Personal Site

Target stack: **Nuxt 3** (Vue 3, Vite, TypeScript).

---

## Overview

A dark-first, minimalist personal site for a Tech Lead in fintech / payment
infrastructure. The design positions the engineer as senior — calm,
technical, restrained — and avoids portfolio / agency / startup-hype tropes.

The site has these top-level sections, in order:

1. **Top navigation** — sticky, transparent at top, soft border on scroll.
2. **Hero** — left column is editorial copy (eyebrow + headline + lede + CTAs
   + a 3-cell meta strip). Right column is a **transaction-graph SVG motif**
   showing the abstract POS → gateway → processor → issuer flow.
3. **About** — small portrait + 3-paragraph bio.
4. **Experience timeline** — 6 roles, reverse-chronological, with tags.
5. **Expertise** — 3×2 categorized grid (Engineering · Architecture · Cloud ·
   Fintech · Leadership · Current Interests).
6. **Footer** — colophon + nav links.

The site supports **EN / ES** language switching (real translations,
client-side) and an **accent color** override via URL or runtime toggle.

---

## About the Design Files

The files in `references/` are **design references**, not production code to
copy verbatim:

- `references/prototype.html` — the working HTML prototype. All visual,
  typographic and layout decisions live here. Treat this as the source of
  truth for spacing, colors and copy.
- `references/portrait.jpg` — portrait photo asset. Drop it under
  `public/img/portrait.jpg` or `assets/img/portrait.jpg` in the Nuxt
  project.
- `references/design-canvas.html` — a Figma-like canvas of three hero
  directions side-by-side, plus the chosen direction at desktop + mobile +
  accent-color variants. Useful context; not needed for implementation.

**The job is to recreate this HTML design as a Nuxt 3 site using Nuxt
idioms** (components, composables, `@nuxtjs/i18n`, server-side rendering,
SCSS or PostCSS, etc.) — not to ship the HTML as-is.

The HTML uses inline `<style>` and inline JS for portability. In Nuxt, those
should be split into proper components, composables and a tokens stylesheet.

---

## Fidelity

**High-fidelity.** Colors, type, spacing, copy and interactions in the
prototype are final. Recreate pixel-faithfully. Where the prototype uses
inline scripts to drive variants/i18n/accent, replace those with Nuxt
patterns; the visual outcome should be identical.

---

## Recommended Nuxt 3 structure

```
app.vue
nuxt.config.ts
i18n/
  en.json
  es.json
assets/
  css/
    tokens.css           # design tokens (see below)
    base.css             # body / typography / global resets
  img/
    portrait.jpg
public/
  favicon.svg
components/
  layout/
    TheNav.vue
    TheFooter.vue
  hero/
    HeroSection.vue          # left column (eyebrow, h1, lede, CTAs, meta)
    HeroGraph.vue            # right-column SVG (variant B — selected)
    HeroEditorial.vue        # right-column manifest panel (variant A)
    HeroStatus.vue           # right-column status grid (variant C)
  about/
    AboutSection.vue
  experience/
    ExperienceTimeline.vue
    ExperienceRole.vue
  expertise/
    ExpertiseGrid.vue
    ExpertiseCard.vue
composables/
  useAccent.ts
  useScrollNavState.ts
pages/
  index.vue
```

### `nuxt.config.ts` modules to add

- **`@nuxtjs/i18n`** — drive EN/ES. Strategy `no_prefix` if you don't want
  `/es/` URLs, or `prefix_except_default` for SEO. Lang switcher in
  `TheNav.vue` calls `setLocale()`.
- **`@nuxt/fonts`** or **`@nuxtjs/google-fonts`** — load Geist (300–700) and
  Geist Mono (400–500) with `display: swap`.
- **`@nuxt/image`** — for the portrait, with `format: ['webp']` and
  `quality: 78`.
- **`@vueuse/nuxt`** — `useScroll`, `useWindowSize`, `useEventListener` cover
  every interaction in the prototype.

---

## Design tokens

CSS custom properties on `:root`. The prototype defines four accent themes
selected via a `[data-accent]` attribute on `<html>`. Indigo is the default;
keep all four.

```css
:root {
  --bg:           #09090b;
  --bg-2:         #0d0d10;
  --bg-card:      rgba(255,255,255,0.018);
  --bg-card-hover:rgba(255,255,255,0.035);
  --border:       rgba(255,255,255,0.06);
  --border-strong:rgba(255,255,255,0.11);

  --text-1: #ededf0;   /* primary */
  --text-2: #a1a1aa;   /* secondary */
  --text-3: #71717a;   /* tertiary / mono captions */
  --text-4: #52525b;   /* quaternary / dividers, micro labels */

  --accent:      #818cf8;                       /* indigo-400 (default) */
  --accent-2:    #a5b4fc;
  --accent-soft: rgba(129,140,248,0.10);
  --accent-line: rgba(129,140,248,0.32);

  --font-sans: 'Geist', 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', ui-monospace, Menlo, monospace;

  --max: 1200px;
  --pad: 40px;
  --radius: 10px;
}

[data-accent="emerald"] { --accent:#34d399; --accent-2:#6ee7b7; --accent-soft:rgba(52,211,153,0.10); --accent-line:rgba(52,211,153,0.32); }
[data-accent="cyan"]    { --accent:#22d3ee; --accent-2:#67e8f9; --accent-soft:rgba(34,211,238,0.10); --accent-line:rgba(34,211,238,0.32); }
[data-accent="indigo"]  { --accent:#818cf8; --accent-2:#a5b4fc; --accent-soft:rgba(129,140,248,0.10); --accent-line:rgba(129,140,248,0.32); }
[data-accent="teal"]    { --accent:#5eead4; --accent-2:#99f6e4; --accent-soft:rgba(94,234,212,0.10); --accent-line:rgba(94,234,212,0.32); }
```

### Spacing scale (used throughout)

- 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 28 / 32 / 36 / 40 / 48 / 56 / 64 / 72 / 88 / 96 / 120 px

Container max-width `1200px`, gutter `--pad` (40px desktop, 20px mobile).
Section vertical padding: `88px` desktop, `56px` mobile. About is lighter:
`72px / 64px` desktop, `56px / 48px` mobile.

### Typography

- Family: **Geist** (sans) + **Geist Mono** (mono). Self-host or use Google
  Fonts. Weights used: 300, 400, 500, 600, 700 for sans; 400, 500 for mono.
- Body: `15px / 1.55`, `letter-spacing: -0.005em`.
- Headline (`h1.headline`): `clamp(38px, 4.6vw, 64px)`, weight `500`,
  `line-height: 1.04`, `letter-spacing: -0.025em`,
  `text-wrap: balance`. The "real money" phrase is wrapped in `<em>` and
  receives a linear-gradient text fill (accent → accent-2).
- Section H2: `clamp(26px, 2.4vw, 36px)`, weight 500, `letter-spacing:
  -0.015em`.
- Role H3: `18px`, weight 500.
- Mono captions: `10–11.5px`, `letter-spacing: 0.06–0.08em`, often
  `text-transform: uppercase`.

### Surface treatments

- **Body background** has two fixed layers (always visible behind content):
  1. Subtle dot grid: `radial-gradient(circle at 1px 1px,
     rgba(255,255,255,0.022) 1px, transparent 0)` with
     `background-size: 32px 32px`.
  2. A faint indigo halo top-right: `radial-gradient(closest-side,
     var(--accent-soft), transparent 70%)` at `width:800px; height:800px;
     top:-300px; right:-200px; opacity:.7`.
- **Cards / panels**: 1px border `--border`, radius `10–12px`, very subtle
  `linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))`
  fill.
- **Hover elevation**: just `background` shift to `--bg-2` and/or
  `border-color` to `--border-strong`. No transform, no glow.

---

## Section-by-section spec

### 1. `TheNav.vue` (sticky)

- Height: 60px desktop, 52px mobile.
- `position: sticky; top: 0`. Backdrop blur `14px` + `saturate(140%)`,
  background `linear-gradient(to bottom, rgba(9,9,11,0.72),
  rgba(9,9,11,0.45))`.
- Adds a `1px` bottom border `var(--border)` when `window.scrollY > 8`.
  Implement with `useScroll()` from `@vueuse/core`.
- Left: brand cluster — a 22×22 indigo rounded glyph with letter `D` inside
  (`font-weight: 700, font-size: 11px, font-family: mono, color: #0b0b10`),
  then `Daniel A. Esteban · Tech Lead, Payments` in Geist Mono 13px. Whole
  brand is `white-space: nowrap`.
- Center: links `Work / Expertise / Writing / Contact`. Hide on mobile
  (≤880px).
- Right: a small EN/ES segmented toggle (pill, mono 11px, active state has
  `rgba(255,255,255,0.06)` background), GitHub icon, LinkedIn icon, and a
  theme icon (visual only — site is dark-first; the toggle is a placeholder
  for future light theme). Hide GitHub/LinkedIn on mobile.

### 2. Hero — `HeroSection.vue` + `HeroGraph.vue` (selected variant)

Two-column grid `minmax(0,1.05fr) minmax(0,0.95fr)`, gap 64px, padding-top
88px / padding-bottom 96px.

**Left column**:

- Eyebrow row: a 6px indigo dot with a 4px-radius accent-soft halo, then
  mono text "Tech Lead · Wompi · Bancolombia", a 24px hairline separator,
  then "Bogotá, CO".
- `h1.headline`: "Engineering the infrastructure that moves *real money*,
  reliably and at scale." — `<em>real money</em>` rendered as gradient text
  fill (accent-2 → accent); the trailing "reliably and at scale." wrapped in
  `<span class="muted">` for `--text-3` color.
- Lede paragraph: `17px / 1.6`, `--text-2`, `max-width: 540px`.
- Actions: a primary button (white background `--text-1`, dark text) "View
  experience →", and a ghost button "Get in touch".
- A meta strip at the bottom: 3 columns separated by a 1px left border, each
  with a mono uppercase 10px label (Focus / Stack / Availability) and a 13px
  value.

**Right column** — `HeroGraph.vue`:

- A rounded panel (`border-radius: 12px`, `1px` border, faint diagonal
  highlight gradient on top, radial accent halo behind).
- Panel head: "transaction · path · 03:24:17" left, "us-east-1 / co-bog-1"
  right (both mono 10px uppercase, `letter-spacing: 0.07em`,
  `color: --text-3`). The left side has the same pulsing dot used in the
  eyebrow.
- SVG body, 520×380 viewBox. Contains:
  - A dot-pattern background (10% opacity dots).
  - Faint white lines connecting four POS terminals (left column rectangles)
    → a central `gateway` node → three PROC-A/B/C boxes → an ISSUER panel.
  - Three of those lines repainted with `stroke="var(--accent)"`,
    `stroke-dasharray: 2 6`, animated with
    `@keyframes dash-flow { to { stroke-dashoffset: -24 } }` (4.5s linear
    infinite).
  - The gateway node's inner circle pulses opacity 0.55 → 1 → 0.55 every
    2.6s.
- Legend row beneath: "live" (accent square) · "idle" (muted square) ·
  "EVENT-DRIVEN · SQS · NEST" right-aligned in mono.

The two **non-selected** hero variants live in `HeroEditorial.vue`
("manifest.toml" key/value panel) and `HeroStatus.vue` (p99 / throughput /
queue / idempotency stat cards with sparklines + a recent-events list).
You can either ship just the graph, or keep all three behind a build-time
flag — recommended: ship Graph only, keep the other components in the repo
for future use.

### 3. `AboutSection.vue`

- Border-top divider. Two-column grid `220px 1fr`, gap 56px, padding `72px 0
  64px`.
- Left: 220×290 portrait card, 10px radius, 1px strong border, big soft drop
  shadow (`0 30px 60px -20px rgba(0,0,0,0.55)`) and a thin
  `rgba(255,255,255,0.012)` 8px outer ring (the `box-shadow` stack handles
  both). Image filter: `saturate(0.55) contrast(1.04) brightness(0.92)` —
  on hover, ease to `saturate(0.9) contrast(1.02) brightness(0.98)` over
  350ms. Overlay: radial top-50% transparency + bottom 35% black gradient
  to push focal point into the figure. Floating tag bottom-left, mono 10px,
  `rgba(9,9,11,0.55)` background + 8px backdrop blur, reads
  "San Francisco · 2025".
- Right: eyebrow row + a 3-paragraph bio + a meta strip of three items
  (each prefixed by an accent dot): "7+ years shipping", "AWS Cloud
  Practitioner", "EN · ES".
- Mobile: stacks to a single column, portrait shrinks to 180×230.

### 4. `ExperienceTimeline.vue` / `ExperienceRole.vue`

- Section head: a 240px left column with mono "01 · Selected work" eyebrow,
  and a single H2 that has both an emphasized run (`--text-1`) and a muted
  continuation (`--text-3`).
- Each role: a two-column grid `240px 1fr`, gap 40px, padding `28px 0`, top
  border `--border`. The first role has no top border / padding-top.
- Hover: a horizontal gradient sweep on the row background
  (`linear-gradient(90deg, transparent, rgba(255,255,255,0.012) 30%,
  transparent)`).
- Left ("when") column: optional "● Now" indicator in accent, date range,
  organization, location (mono captions).
- Right ("body") column: H3 role title, mono subtitle line of stack, lede
  paragraph, a bullet list (custom `::before` 6px hairline marks), and a
  row of tag pills.
- Six roles, in order:
  1. **Wompi · Bancolombia** — 2024-Present — Tech Lead · Payment
     Infrastructure
  2. **Datak SAS** — 2023-2025 — Architect & Tech Lead · Cloud-Native ERP
  3. **Iotel · Erictel** — 2023-2024 — Frontend Software Architect
  4. **Banco Davivienda** — 2022-2023 — Tech Lead · Enterprise Banking
     Integrations
  5. **Iotel · Erictel** — 2021-2022 — Frontend Web · IoT Telemetry
  6. **Inmetar SAS** — 2019-2021 — Full-stack · Industrial Automation
- Tag styles: 1px border `--border-strong`, `--text-3` color, mono 10.5px,
  border-radius 5px. A `.tag.hot` variant uses accent color + `--accent-line`
  border + `--accent-soft` background — used for "EMV L3" / "PCI DSS" on
  the Wompi role to highlight the credibility signal.

### 5. `ExpertiseGrid.vue` / `ExpertiseCard.vue`

- A 3-column CSS grid of 6 cards inside a single rounded card with `1px`
  outer border and `1px gap` (the gap itself is `var(--border)` color — this
  gives the hairline divider grid look).
- Each card: `padding 24px`, `min-height 220px`, contains a mono "A · 01"
  numbering caption, a 15px H4 category title, and a bullet list of
  competencies. Hovered card subtly darkens to `--bg-2`.
- Categories:
  1. Engineering (TypeScript / Python / NestJS / Vue · Nuxt / REST · OpenAPI)
  2. Architecture (Event-driven · DDD · Idempotency · HA)
  3. Cloud & Infrastructure (AWS · GCP · K8s · CI/CD · Linux)
  4. Fintech & Payments (POS · EMV L3 · PCI DSS · processors · tokenization)
     — bottom caption "— current operating context" in accent mono.
  5. Leadership (architecture reviews / mentorship / standards / vendor
     governance)
  6. Current Interests (reliability under failure / latency budgets /
     verifiable transaction state / compliance / writing) — bottom caption
     "— actively writing about" in accent mono.

### 6. `TheFooter.vue`

- Top border, padding `56px 0 80px`.
- Two-column row: a left colophon (mono 11px, e.g. "Set in Geist and Geist
  Mono. Engineered as a static site. Last revision · 2026.05. Built for
  clarity, not for ceremony.") plus contact email; right cluster of
  navigation links + GitHub / LinkedIn external links (suffixed with `↗`).

---

## Interactions & motion

Restraint is the brief. All motion is opacity / translate, no transforms
larger than `scale(1.02)`. No parallax.

- **Nav border on scroll**: toggle class when `scrollY > 8`. Hook via
  `useScroll`.
- **Hover** on tags, buttons, role rows, skill cards: 120–250ms transitions
  on `border-color`, `background`, `color`. Buttons translate their `→`
  arrow 2px on hover.
- **Hero graph**: two keyframe animations only — `dash-flow` (continuous
  4.5s linear, no easing) and `node-pulse` on the central gateway node
  (2.6s ease-in-out infinite). Status panel "live" blips reuse `node-pulse`.
- **Portrait**: image filter eases over 350ms on hover.
- **Language switch**: instant. No transition.
- **Reduced motion**: respect `prefers-reduced-motion`. The dash-flow
  animation must `animation: none` under that media query.

---

## i18n

Two languages: English (default) and Spanish. The prototype's `I18N` object
and `HEADLINE` map cover all strings; port them to `i18n/en.json` and
`i18n/es.json`.

Keys to expose to `useI18n()`:

- `brand.role`, `nav.*`, `hero.eyebrow*`, `hero.cta*`, `meta.*`
- `about.*`
- `time.*`, `loc.*`, `role.*` (`.title`, `.lede`, `.b1..b5`)
- `sec.*`, `work.head*`, `exp.head`, `sk.*`
- `status.*`, `graph.*`, `foot.colophon`

The hero `<h1>` contains inline HTML (`<em>` and `<span class="muted">`).
Use `v-html` against an i18n string or model the segments as named slots —
do **not** concatenate.

Persist last-selected locale to `localStorage` (or use `@nuxtjs/i18n`'s
cookie strategy).

---

## State management

Only three pieces of runtime state:

1. **Locale** — `@nuxtjs/i18n` handles it. Lang switcher in nav calls
   `setLocale('en' | 'es')`.
2. **Accent color** — `useAccent()` composable: reactive ref over
   `'indigo' | 'emerald' | 'cyan' | 'teal'`, default `'indigo'`. Effect
   writes `document.documentElement.dataset.accent`. Persists to
   `localStorage`. The prototype also reads `?accent=` from the query
   string — replicate that in `pages/index.vue` via `useRoute()`.
3. **Nav scroll state** — boolean for the bottom border. Hook via
   `useScroll()` from `@vueuse/core`.

No global store needed. Pinia is overkill here.

---

## Assets

- `portrait.jpg` — supplied in `references/portrait.jpg`. Place in
  `assets/img/portrait.jpg`. Process through `@nuxt/image` if available
  (responsive `srcset` at 1×/2× of 220×290).
- Fonts: **Geist** and **Geist Mono** (Vercel-licensed, on Google Fonts).
- Icons: GitHub and LinkedIn glyphs are inline SVG paths in the prototype
  (`<nav>`). Keep them inline — don't pull a heavy icon library for two
  icons.

---

## Responsive behavior

Single breakpoint at `880px`. Below it:

- Nav links collapse (hidden — recommend a slide-out drawer triggered by a
  hamburger, but the prototype simply hides them; matching the prototype is
  acceptable for v1).
- Hero grid collapses to single column.
- All `section-head` / `role` two-column grids collapse to single column.
- Skills grid collapses to single column.
- Section vertical paddings tighten (88→56, 72→56, etc. — see the prototype
  CSS).

---

## Acceptance checklist

- [ ] Dark base #09090b, indigo accent #818cf8 visible in hero, eyebrow dot,
      gradient on "real money", graph live edges, accent dot on About meta.
- [ ] Geist and Geist Mono load and render correctly (verify in DevTools).
- [ ] Hero graph SVG renders identically to prototype, with dash-flow and
      gateway pulse animations running.
- [ ] EN/ES toggle in nav swaps every string, including the hero headline
      with its inline `<em>` and muted span.
- [ ] Accent color toggle (emerald / cyan / indigo / teal) re-themes the
      entire page without reload.
- [ ] Nav gains its bottom border after 8px of scroll.
- [ ] Portrait is desaturated by default and eases to higher saturation on
      hover.
- [ ] All six experience roles render with the correct dates, stack
      subtitle, lede, bullets and tags.
- [ ] Lighthouse: Accessibility ≥ 95, Performance ≥ 95 on a static build
      (`nuxt build && nuxt generate`).
- [ ] `prefers-reduced-motion: reduce` halts the dash-flow and node-pulse
      animations.

---

## Files

- `references/prototype.html` — full HTML/CSS/JS prototype. Source of truth.
- `references/portrait.jpg` — portrait asset.
- `references/design-canvas.html` — the three-direction canvas (context
  only).
