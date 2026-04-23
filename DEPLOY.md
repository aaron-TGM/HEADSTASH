# Deploy

Both sites deploy from this one monorepo as two separate Vercel projects.

## One-time: push to GitHub

```bash
# from the workspace root
gh repo create headstash-marketing --private --source=. --remote=origin
git push -u origin main
```

(Replace `headstash-marketing` with your preferred repo name.)

## Create the two Vercel projects

For each app, create a Vercel project pointing at the same repo with a different Root Directory. The Vercel dashboard flow:

1. **New Project** → import the `headstash-marketing` repo.
2. **Configure Project**:
   - **Project Name:** `headstash-b2b`
   - **Framework Preset:** Next.js (detected automatically)
   - **Root Directory:** `apps/headstash-b2b`
   - **Build Command:** *(leave blank — Vercel uses `pnpm run build` based on the workspace package.json)*
   - **Install Command:** `pnpm install --frozen-lockfile`
   - **Output Directory:** `.next` (default)
3. **Environment Variables** (from `apps/headstash-b2b/.env.example`):
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=getheadstash.com`
   - `NEXT_PUBLIC_SITE_URL=https://getheadstash.com`
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` *(wired in step 3)*
   - `RESEND_API_KEY`, `NOTIFY_EMAIL=hello@getheadstash.com` *(wired in step 3)*
4. Deploy.
5. **Settings → Domains:** add `getheadstash.com` and `www.getheadstash.com`. Follow Vercel's DNS instructions with your registrar.

Repeat for the consumer project:

- **Project Name:** `headstash-consumer`
- **Root Directory:** `apps/headstash-consumer`
- **Env:** `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=joinheadstash.com`, `NEXT_PUBLIC_SITE_URL=https://joinheadstash.com`, Twilio + Resend keys
- **Domain:** `joinheadstash.com` (+ `www.joinheadstash.com`)

## Defensive domains

Per brand doc §12, the following 301-redirect to `getheadstash.com`:

- `headstash.co`
- `headstash.app`
- `headstashrewards.com`

Set these up as redirects at the registrar level (Porkbun, Cloudflare, etc.) or as aliased Vercel domains pointing to the b2b project with a redirect rule.

## Self-hosted fonts on Vercel

The Blunt Family woff2 files are `.gitignore`d at the workspace root (licensed assets, shouldn't live in a public git repo). Pick **one** strategy before first deploy:

**Option A — Temporarily whitelist during setup.** Comment out the font-file entries in `.gitignore`, commit the woff2 files once, deploy, and then re-add them. Works but leaks the asset in git history.

**Option B — Private asset bucket.** Upload the woff2 files to a private S3/R2/Spaces bucket. Add a `prebuild` script to `apps/headstash-b2b/package.json` that `curl`s them into `public/fonts/` using a bucket URL + signed token from env:

```json
{
  "scripts": {
    "prebuild": "node ../../scripts/fetch-fonts.mjs",
    "build": "next build"
  }
}
```

Write `scripts/fetch-fonts.mjs` to pull the four files into `public/fonts/`.

**Option C — Separate private repo, added as a Vercel Git Submodule.** Keep fonts in `headstash-brand-assets` (private). Add as a git submodule at `apps/headstash-b2b/public/fonts`. Vercel will clone submodules on build if you add the deploy key.

Recommend Option B for simplicity and asset reuse across both apps (same bucket, same prebuild script in both `package.json`s).

## Post-deploy checklist

For each project, verify:

- [ ] HTTPS certificate issued
- [ ] `https://getheadstash.com` and `https://joinheadstash.com` return 200
- [ ] The `HEADSTASH` wordmark renders in Blunt Family (not system sans)
- [ ] View source shows the preload for `BluntFamily-Regular.woff2`
- [ ] Plausible is tracking (check plausible.io dashboard after a real visit)
- [ ] Theme tokens resolved — right-click a page element, inspect computed styles, confirm `background-color: rgb(14, 14, 14)` (onyx)
- [ ] No console errors

## Preview deployments

Every branch push gets a Vercel preview URL automatically. Use those for step-by-step content review before merging to `main`.
