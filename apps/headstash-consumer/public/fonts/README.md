# Drop Blunt Family woff2 files here

Same requirements as `apps/headstash-b2b/public/fonts/README.md`. Drop the four woff2 files here as well. Each Next.js app serves its own `/public` directory at build time, so both apps need their own copy.

## Required filenames

```
BluntFamily-Regular.woff2
BluntFamily-Outline.woff2
BluntFamily-Italic.woff2
BluntFamily-Script.woff2
```

If you want to avoid the duplication long-term, refactor `@headstash/brand/fonts.css` to reference a shared origin (e.g., `https://assets.headstash.com/fonts/...`) and remove the per-app copies. For step 1 we keep them local per-app.
