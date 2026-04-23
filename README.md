# Headstash — marketing sites monorepo

Two Next.js 15 sites that share a brand system.

| App | Domain | Audience | Directory |
|---|---|---|---|
| `headstash-b2b` | getheadstash.com | CA cannabis brand operators | `apps/headstash-b2b` |
| `headstash-consumer` | joinheadstash.com | 20–35 drop-culture buyers | `apps/headstash-consumer` |

Shared packages live under `packages/`. Single source of truth for colors, type scale, and fonts is `@headstash/brand`.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript strict mode
- Tailwind CSS v4 (CSS-first config via `@theme`)
- Self-hosted Blunt Family (woff2)
- Inter via `next/font/google`
- pnpm workspaces + Turbo
- Supabase + Resend (wired in step 3)
- Plausible Analytics
- Deployed to Vercel

## First-time setup

Requires Node 20.11+ and pnpm 9+.

```bash
# If you don't have pnpm yet:
corepack enable
corepack prepare pnpm@9.12.3 --activate

# From the monorepo root:
pnpm install
```

Then drop the Blunt Family woff2 files into both font folders (see `apps/*/public/fonts/README.md`):

```
apps/headstash-b2b/public/fonts/
apps/headstash-consumer/public/fonts/
```

Each folder needs these four filenames:

- `BluntFamily-Regular.woff2`
- `BluntFamily-Outline.woff2`
- `BluntFamily-Italic.woff2`
- `BluntFamily-Script.woff2`

The build works without them (system sans fallback), but the brand only renders correctly once they're present.

## Run

```bash
pnpm dev              # both apps (b2b on :3000, consumer on :3001)
pnpm dev:b2b          # just b2b
pnpm dev:consumer     # just consumer
pnpm build            # production build of both
pnpm typecheck        # strict TS check across workspace
```

## Layout

```
HEADSTASH/
├── apps/
│   ├── headstash-b2b/            getheadstash.com
│   └── headstash-consumer/       joinheadstash.com
├── packages/
│   └── brand/                    design tokens, fonts.css, theme.css
├── package.json                  workspace root
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json            strict shared TS config
```

## Deployment

See [`DEPLOY.md`](./DEPLOY.md).

## Brand

All design decisions — colors, type, voice — are governed by the Headstash Brand System v1 (living document, Apr 2026). Never hardcode hex values in components; import from `@headstash/brand` or reference the Tailwind token utilities (`bg-onyx`, `text-bone`, `text-display`, etc.).

## License

UNLICENSED — proprietary to Tuff Ghost Media LLC.
