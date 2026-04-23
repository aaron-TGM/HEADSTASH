# Drop Blunt Family woff2 files here

This folder is intentionally empty in git (the woff2 files are licensed assets and are `.gitignore`d at the workspace root).

## Required filenames

```
BluntFamily-Regular.woff2
BluntFamily-Outline.woff2
BluntFamily-Italic.woff2
BluntFamily-Script.woff2
```

These must match the filenames in `packages/brand/src/fonts.css` exactly. If the foundry ships different filenames, either rename the files or update `fonts.css` (and do the same rename in `apps/headstash-consumer/public/fonts/`).

## Where to get the files

Blunt Family is licensed from Sup~port Studio via YouWorkForThem. Purchase the web license tier that covers `getheadstash.com` + `joinheadstash.com` traffic. The download ships OTF/TTF; convert to woff2 via:

```bash
# one-off converter; install once
npm i -g woff2
woff2_compress BluntFamily-Regular.ttf
```

Or use [Everything Fonts](https://everythingfonts.com/ttf-to-woff2) if you'd rather not run it locally.

## Vercel deployment

The woff2 files must be present on the Vercel build or the fonts won't load in production. Two safe options:

1. **Private asset bucket (recommended).** Upload woff2 to an S3/R2 bucket the build can pull from, and fetch them during `prebuild`. Preserves the gitignore and the license.
2. **Private submodule.** Keep the woff2 files in a separate private repo and check it out at build time.

Pick one and document it in `DEPLOY.md` once you've decided.
