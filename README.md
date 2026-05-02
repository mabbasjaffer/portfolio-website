# abbasjaffer.com

Personal site for Abbas Jaffer. Built with Next.js, TypeScript, Tailwind v4, and MDX. Deployed to Cloudflare Pages.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (installed on demand)
- **Icons:** Lucide
- **Fonts:** Geist Sans / Geist Mono via the `geist` package (self-hosted)
- **Theming:** next-themes (system default, class-based)
- **Content:** MDX (added in step 6)

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | What it does             |
| ------------------- | ------------------------ |
| `pnpm dev`          | Start the dev server     |
| `pnpm build`        | Production build         |
| `pnpm start`        | Run the production build |
| `pnpm lint`         | ESLint                   |
| `pnpm typecheck`    | TypeScript, no emit      |
| `pnpm format`       | Prettier write           |
| `pnpm format:check` | Prettier check (CI-safe) |

## Project layout

```
src/
  app/                 Next.js App Router routes
    layout.tsx         Root layout, fonts, theme provider
    page.tsx           Home (placeholder until step 4)
    globals.css        Tailwind v4 entry + design tokens
  components/          App components
    theme-provider.tsx next-themes wrapper
  lib/
    utils.ts           cn() helper
```

## Status

Step 1 of 11 — scaffold. See the project plan for what comes next.
