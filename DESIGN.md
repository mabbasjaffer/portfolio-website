# Design system

This document is the source of truth for the design tokens used across the site. The `/design-system` route renders all of them live — read this for the rationale, look at the route for the visuals.

> **Reference points:** Stripe.com, Linear.app, Anthropic.com, Pitch.com, Posthog.com/handbook, Stripe Press.
> **Avoid:** AI-portfolio-template look, gradient heroes, glassmorphism, oversized rounded cards, decorative emoji.

## Tokens

All tokens live in `src/app/globals.css` under `@theme`. Tailwind v4 generates utility classes from each token automatically (e.g. `--color-foreground` → `bg-foreground`, `text-foreground`, `border-foreground`; `--text-h1` → `text-h1`).

### Colors

| Token                       | Light     | Dark      | Use                            |
| --------------------------- | --------- | --------- | ------------------------------ |
| `--color-background`        | `#FAFAF9` | `#0E0E10` | Page background                |
| `--color-foreground`        | `#0F0F0F` | `#EDEDED` | Body text                      |
| `--color-muted`             | `#6B7280` | `#A1A1AA` | Captions, dek, metadata        |
| `--color-subtle`            | `#F4F4F2` | `#1A1A1D` | Inline code, subtle surfaces   |
| `--color-border`            | `#E7E5E4` | `#27272A` | Hairlines                      |
| `--color-accent`            | depends   | depends   | Inline links, active state     |
| `--color-accent-foreground` | —         | —         | Text on accent (button labels) |
| `--color-accent-soft`       | —         | —         | Selection bg, accent-tinted bg |

The accent is selected via `data-accent` on `<html>`, with values `indigo | orange | forest`. The default is `indigo`. Switch on `/design-system` to compare.

| Accent option | Light     | Dark      | Vibe                                |
| ------------- | --------- | --------- | ----------------------------------- |
| `indigo`      | `#3D3DBC` | `#A0A6FF` | Editorial, intellectual, Stripe-ish |
| `orange`      | `#B5400D` | `#F08A4B` | Warm, considered, magazine-leaning  |
| `forest`      | `#1E5631` | `#7CC68A` | Grounded, mature, slower            |

### Typography

Three faces, each with a clear job:

- **Geist Sans** — UI, navigation, headings, dek. The default body face.
- **Geist Mono** — metadata, dates, tags, stat blocks. Sparingly.
- **Editorial serif** — long-form reading on `/writing` and `/work`. The current default is **Newsreader**; alternates Source Serif 4 and Fraunces are loaded only on `/design-system` for comparison and will be removed once a serif is picked.

All three are self-hosted at build time via `next/font` — no Google Fonts CDN at runtime.

#### Scale (clamped, fluid mobile→desktop)

| Token            | Size          | Use                           |
| ---------------- | ------------- | ----------------------------- |
| `--text-display` | clamp 36–64px | Home hero only                |
| `--text-h1`      | clamp 30–44px | Article title, section opener |
| `--text-h2`      | clamp 24–32px | Sub-section                   |
| `--text-h3`      | 22px          | Tertiary header               |
| `--text-h4`      | 18px          | Small header                  |
| `--text-body`    | 16px          | Sans body                     |
| `--text-prose`   | 19px          | Serif body for long-form      |
| `--text-small`   | 14px          | Helper text, captions         |
| `--text-meta`    | 12px          | Mono metadata                 |

Long-form prose uses leading 1.65, max-width 672px (`--width-prose`).

### Layout

| Token             | Value  | Use                              |
| ----------------- | ------ | -------------------------------- |
| `--width-content` | 1200px | Home, index pages, design system |
| `--width-prose`   | 672px  | Articles, case studies           |

Spacing uses Tailwind's default 4px-base scale. No custom space tokens.

### Motion

| Token          | Value                            | Use               |
| -------------- | -------------------------------- | ----------------- |
| `--ease-quiet` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default UI easing |

Durations: 150ms for UI, 220ms for page transitions. `prefers-reduced-motion` short-circuits all animation globally (see `globals.css`).

### Focus

`:focus-visible` is a 2px solid ring in `--color-accent` with 2px offset and 2px radius. Never strip it.

## Components (`src/components/ui/`)

| Component   | Props                          | Notes                                       |
| ----------- | ------------------------------ | ------------------------------------------- |
| `Container` | `width = "content" \| "prose"` | Wraps any page; sets max-width + padding    |
| `Button`    | `variant`, `size`, `as`        | `primary \| secondary \| ghost`, `sm \| md` |
| `Prose`     | `children`                     | Wraps MDX content for /writing and /work    |

shadcn/ui primitives (Dialog, Popover, etc.) are installed on demand via `pnpm dlx shadcn@latest add <name>`. They land in `src/components/ui/` and inherit our color tokens.

## Previewing

```bash
pnpm dev
# open http://localhost:3000/design-system
```

In production the route returns 404 unless `SHOW_DESIGN_SYSTEM=true` is set in the deployment environment.

## Deciding (still open)

- **Accent color:** picking 1 of `indigo | orange | forest`. Update default in `src/app/layout.tsx` (`data-accent`) and remove the picker section once chosen.
- **Serif:** picking 1 of `Newsreader | Source Serif 4 | Fraunces`. Once chosen, drop the other two from `src/lib/fonts.ts` and the design-system layout.
