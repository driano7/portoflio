# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Market History Scheduler

The token chart uses a server-side hourly history file (`data/market-history.txt` or `/tmp/market-history.txt`) and a daily cut at **3:00 PM America/Mexico_City**.

To keep it updated without user traffic, this repo includes a GitHub Actions scheduler:

- Workflow: `.github/workflows/market-history-hourly.yml`
- Endpoint: `/api/market/cron-sync`

### Required GitHub Secrets

- `SITE_URL`: your deployed site URL, for example `https://your-domain.com`
- `MARKET_CRON_SECRET`: shared secret used by the scheduler and the API endpoint

### Required Runtime Env Vars

- `COINMARKETCAP_API_KEY` (or `CMC_API_KEY`)
- `MARKET_CRON_SECRET` (same value used in GitHub secret)

## SEO Indexing (Google + Social)

This project now includes:
- `robots.txt` route (`src/app/robots.ts`)
- `sitemap.xml` route (`src/app/sitemap.ts`)
- Canonical/Open Graph metadata per route
- JSON-LD structured data in the root layout
- Verification meta tags via environment variables

### Optional verification env vars

- `GOOGLE_SITE_VERIFICATION`
- `FACEBOOK_DOMAIN_VERIFICATION`
- `PINTEREST_SITE_VERIFICATION`
- `FACEBOOK_APP_ID` (or `NEXT_PUBLIC_FACEBOOK_APP_ID`)

### Site URL env var (recommended)

- `NEXT_PUBLIC_SITE_URL` (for canonical URLs, robots host/sitemap, OG absolute URLs)
