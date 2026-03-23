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
