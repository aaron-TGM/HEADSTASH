# @headstash/brand

Single source of truth for Headstash design tokens, fonts, and shared brand CSS.

## What's in here

| Export | Purpose |
|---|---|
| `@headstash/brand` (index) | TS tokens — `colors`, `typeScale`, `fontFamilies`, etc. |
| `@headstash/brand/tokens` | Same as index, explicit path. |
| `@headstash/brand/theme.css` | Tailwind v4 `@theme` block. Imported into each app's globals. |
| `@headstash/brand/fonts.css` | Blunt Family `@font-face` rules + typography utility classes. |
| `@headstash/brand/reset.css` | Brand-level CSS defaults (body, links, selection). |

## Rules

- **Never hardcode hex values in components.** Import from this package, or use the Tailwind utilities generated from `theme.css` (`bg-onyx`, `text-ochre`, `text-display`, etc.).
- **Never edit `theme.css` without also editing `tokens.ts`** — keep them in sync.
- **Never add cannabis green.** Moss is the only green and it's status-only.
- **Never add pure white.** Bone is the light background; `bone-alt` exists for small UI with contrast issues.

## Updating tokens

1. Change value in `src/tokens.ts`.
2. Mirror the change in `src/theme.css`.
3. Run `pnpm typecheck` from the workspace root.

## Rationale

Tailwind v4's CSS-first config means the `@theme` block in `theme.css` is the ground truth for utility generation. `tokens.ts` exists so React components can reference the same values in TypeScript (for example, setting an SVG stroke color or computing a runtime style). The two files are small enough that manual sync is faster than a codegen step, and the tokens rarely change once locked.
