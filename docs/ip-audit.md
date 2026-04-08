# IP Audit And Separation Map

Scope note: this repository is a public personal blog authored by Donovan Riaño. Treat the reusable shell and SEO system as reusable core owned by the repository author, not as a client agency deliverable. This document classifies code by reuse boundary, not as legal advice. Anything marked `requires legal/contractual review` should be confirmed against the repo history, upstream licenses, and any external asset terms.

Category note: the table keeps the requested labels (`CLIENTE_OWNED`, `AGENCY_OWNED`, `THIRD_PARTY_INTEGRATION`, `MIXED`) for compatibility, but in this repo `AGENCY_OWNED` should be read as `REUSABLE_CORE`.

## Main Site Capabilities

- Public landing page with animated hero, CTA navigation, and route prefetching.
- About page with stacked card reveal, image handling, and long-form author narrative.
- Projects page with GitHub repo fetch, contribution calendar, and project showcase.
- Web3 / education pages with localized content, expandable sections, and market charts.
- Global navigation with desktop header, mobile dock, language switcher, theme switcher, and scroll reset on route change.
- SEO surface with App Router metadata, canonical URLs, robots.txt, sitemap.xml, and JSON-LD.
- Market data surface with internal API routes proxying CoinMarketCap and storing chart history.
- AI bootstrap for Genkit + Google AI integration.

## Dependency Map

| Dependency | Integration point | Risk / note |
|---|---|---|
| `next-intl` | `src/i18n/*`, headers, docks, landing, about, projects, web3, education | Locale routing and copy model are tightly coupled to the UI shell. |
| `next-themes` | `src/components/theme-provider.tsx`, `src/components/theme-switcher.tsx`, `src/app/layout.tsx` | Theme transition behavior depends on DOM support and the root class contract. |
| `@radix-ui/*` | `src/components/ui/*` | Base primitives; changes affect many UI surfaces. |
| `lucide-react` | Header, footer, controls, cards, navigation | Shared icon dependency. |
| `date-fns` | `src/components/sections/projects.tsx` | Relative-date formatting in the projects surface. |
| `recharts` | `src/components/ui/chart.tsx` | Chart primitives used by UI helpers. |
| CoinMarketCap | `src/lib/market-tokens.ts`, `src/app/api/market/*`, chart/ticker components | Provider terms, rate limits, and API keys. |
| Google Docs export | `src/lib/google-docs.ts`, `src/app/web3/education/[slug]/page.tsx` | External content source; can fail independently of the site. |
| GitHub REST API | `src/app/projects/page.tsx` | Rate limit and availability risk. |
| GitHub Calendar CDN | `src/components/sections/github-contributions.tsx` | Third-party JS/CSS loaded at runtime. |
| Genkit + Google AI | `src/ai/*` | External model/runtime dependency. |
| Internal market routes | `src/app/api/market/*` | Server-side boundary for provider credentials and persistence. |

## Folder Matrix

### `src/app/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/app/layout.tsx` | `MIXED` | Global shell combines reusable core, locale wiring, SEO, and site branding. | Reusable core may require internal licensing if extracted. | Internal site shell |
| `src/app/robots.ts` | `AGENCY_OWNED` | Reusable SEO infrastructure. | Reusable core; license if extracted. | Internal |
| `src/app/sitemap.ts` | `MIXED` | Reusable sitemap logic plus site-specific URLs. | Reusable core; license if extracted. | Public sitemap |
| `src/app/manifest.ts` | `CLIENTE_OWNED` | Site name, theme colors, and PWA branding. | No extra, unless assets are external. | Public |
| `src/app/apple-icon.tsx` | `CLIENTE_OWNED` | Site icon asset / branding. | No extra if asset is original. | Public |
| `src/app/icon.tsx` | `CLIENTE_OWNED` | Site icon asset / branding. | No extra if asset is original. | Public |
| `src/app/icon-192/route.tsx` | `CLIENTE_OWNED` | Site icon asset / branding. | No extra if asset is original. | Public |
| `src/app/icon-512/route.tsx` | `CLIENTE_OWNED` | Site icon asset / branding. | No extra if asset is original. | Public |
| `src/app/favicon.ico/route.ts` | `CLIENTE_OWNED` | Site icon asset / branding. | No extra if asset is original. | Public |
| `src/app/api/market/*` | `THIRD_PARTY_INTEGRATION` | Server routes that proxy CoinMarketCap and persist local history. | CoinMarketCap terms apply. | Internal server boundary |
| `src/app/page.tsx` | `MIXED` | Landing content plus reusable shell/SEO. | Site content is author-owned. | Public site page |
| `src/app/about/page.tsx` | `MIXED` | Author narrative plus reusable shell. | Site content is author-owned. | Public site page |
| `src/app/projects/page.tsx` | `MIXED` | Author content plus GitHub API usage. | GitHub terms apply indirectly. | Public site page |
| `src/app/web3/page.tsx` | `MIXED` | Author content plus reusable charts / shell. | Site content is author-owned. | Public site page |
| `src/app/web3/education/page.tsx` | `MIXED` | Author content plus reusable shell. | Site content is author-owned. | Public site page |
| `src/app/web3/education/[slug]/page.tsx` | `MIXED` | Dynamic author content plus Google Docs adapter and schema. | Google Docs terms may apply. | Public site page |
| `src/app/servicios/page.tsx` | `MIXED` | Index page built from reusable shell and site copy. | Site content is author-owned. | Public site page |
| `src/app/servicios/[slug]/page.tsx` | `MIXED` | Dynamic service page using reusable metadata and entity builders. | Site content is author-owned. | Public site page |
| `src/app/blog/page.tsx` | `MIXED` | Index page built from reusable shell and site copy. | Site content is author-owned. | Public site page |
| `src/app/blog/[slug]/page.tsx` | `MIXED` | Dynamic article page using reusable metadata and entity builders. | Site content is author-owned. | Public site page |
| `src/app/casos/page.tsx` | `MIXED` | Index page built from reusable shell and site copy. | Site content is author-owned. | Public site page |
| `src/app/casos/[slug]/page.tsx` | `MIXED` | Dynamic case-study page using reusable metadata and entity builders. | Site content is author-owned. | Public site page |

### `src/components/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/components/seo/*` | `AGENCY_OWNED` | Reusable JSON-LD injection and SEO composition layer. | Reusable core; license if extracted. | Internal reusable core |
| `src/components/ui/*` | `AGENCY_OWNED` | Shared primitives and reusable UI building blocks. | `requires legal/contractual review` if derived from templates. | Internal reusable core |
| `src/components/icons/*` | `AGENCY_OWNED` | Shared icon assets for the site shell. | No extra if original. | Internal reusable core |
| `src/components/common/site-header.tsx` | `AGENCY_OWNED` | Global navigation shell and desktop header. | Reusable core. | Internal reusable core |
| `src/components/common/site-footer.tsx` | `CLIENTE_OWNED` | Personal/social links and site branding. | No extra for original content; third-party links are external. | Public site chrome |
| `src/components/common/mobile-doc-nav.tsx` | `AGENCY_OWNED` | Mobile navigation shell for the site. | Reusable core. | Internal reusable core |
| `src/components/common/language-switcher.tsx` | `AGENCY_OWNED` | Reusable locale toggle logic. | Reusable core. | Internal reusable core |
| `src/components/common/theme-switcher.tsx` | `AGENCY_OWNED` | Reusable theme toggle with motion behavior. | Reusable core. | Internal reusable core |
| `src/components/common/blog-controls.tsx` | `AGENCY_OWNED` | Header control group for locale, market, and theme. | Reusable core. | Internal reusable core |
| `src/components/common/market-ticker-toggle.tsx` | `MIXED` | UI shell plus internal market-data feature. | Third-party market terms apply indirectly. | Internal feature surface |
| `src/components/common/scroll-to-top-on-route.tsx` | `AGENCY_OWNED` | Navigation helper for route transitions. | Reusable core. | Internal reusable core |
| `src/components/background.tsx` | `AGENCY_OWNED` | Reusable background layer for the site shell. | Reusable core. | Internal reusable core |
| `src/components/particles.tsx` | `AGENCY_OWNED` | Reusable particle animation primitive. | Reusable core. | Internal reusable core |
| `src/components/theme-provider.tsx` | `AGENCY_OWNED` | Theme system adapter. | Reusable core. | Internal reusable core |
| `src/components/sections/landing.tsx` | `MIXED` | Reusable layout pattern plus author copy. | Site content is author-owned. | Public site page |
| `src/components/sections/about.tsx` | `MIXED` | Reusable animation/layout plus author narrative and assets. | Site content is author-owned. | Public site page |
| `src/components/sections/projects.tsx` | `MIXED` | Reusable layout plus GitHub-driven content. | GitHub terms apply indirectly. | Public site page |
| `src/components/sections/web3.tsx` | `MIXED` | Reusable layout plus author educational content. | Site content is author-owned. | Public site page |
| `src/components/sections/btc-guide-chart.tsx` | `MIXED` | Chart UI plus internal market-data route. | CoinMarketCap terms apply indirectly. | Public site page |
| `src/components/sections/eth-guide-chart.tsx` | `MIXED` | Chart UI plus internal market-data route. | CoinMarketCap terms apply indirectly. | Public site page |
| `src/components/sections/defi-market-ticker.tsx` | `MIXED` | Panel UI plus internal market-data route. | CoinMarketCap terms apply indirectly. | Public site page |
| `src/components/sections/github-contributions.tsx` | `THIRD_PARTY_INTEGRATION` | Loads external CDN script and stylesheet. | GitHub Calendar / CDN terms apply. | Public site page |
| `src/components/ui/xoco-payment-card-demo.tsx` | `MIXED` | Product-specific demo component with reusable visual patterns. | Requires review if reused outside this site. | Public demo surface |

### `src/lib/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/lib/seo/*` | `AGENCY_OWNED` | Reusable SEO core: metadata, canonicals, JSON-LD, entities, and URLs. | Reusable core; license if extracted. | Internal reusable core |
| `src/lib/utils.ts` | `AGENCY_OWNED` | Generic helper for class composition. | Reusable core. | Internal reusable core |
| `src/lib/market-history.ts` | `AGENCY_OWNED` | Core storage and normalization logic for market snapshots. | Reusable core. | Internal reusable core |
| `src/lib/market-tokens.ts` | `THIRD_PARTY_INTEGRATION` | CoinMarketCap API client wrapper. | CoinMarketCap terms apply. | Internal server-side integration |
| `src/lib/google-docs.ts` | `THIRD_PARTY_INTEGRATION` | Google Docs export adapter. | Google terms apply. | Internal server-side integration |
| `src/lib/education-guides.ts` | `CLIENTE_OWNED` | Author editorial content and guide metadata. | Original content; external references may carry their own terms. | Public site content |
| `src/lib/education-guides-content-en.ts` | `CLIENTE_OWNED` | Translated editorial content. | Original content. | Public site content |
| `src/lib/education-guides-i18n.ts` | `CLIENTE_OWNED` | Content localization mapping for the author’s guides. | Original content. | Public site content |
| `src/lib/blog.ts` | `MIXED` | Content loading logic plus author pages/content model. | Site content is author-owned; parser logic reusable. | Internal |
| `src/lib/mdx.ts` | `MIXED` | MDX parsing/rendering helper used for site content. | Reusable parsing layer. | Internal reusable core |
| `src/lib/site-content.ts` | `MIXED` | Content model wrapper combining author content and reusable accessors. | Site content is author-owned. | Internal |
| `src/lib/github-projects.ts` | `THIRD_PARTY_INTEGRATION` | GitHub API integration for project data. | GitHub terms apply. | Internal server-side integration |

### `src/hooks/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/hooks/use-mobile.tsx` | `AGENCY_OWNED` | Generic breakpoint helper. | Reusable core. | Internal reusable core |
| `src/hooks/use-toast.ts` | `AGENCY_OWNED` | Generic toast state helper. | Reusable core. | Internal reusable core |

### `src/i18n/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/i18n/*` | `AGENCY_OWNED` | Locale routing, request config, and navigation helpers. | Reusable core. | Internal reusable core |

### `src/ai/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/ai/genkit.ts` | `THIRD_PARTY_INTEGRATION` | Genkit + Google AI bootstrap. | Google / Genkit terms apply. | Internal server-side integration |
| `src/ai/dev.ts` | `THIRD_PARTY_INTEGRATION` | Dev entry point for the AI runtime. | Google / Genkit terms apply. | Internal development integration |

### `src/messages/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `src/messages/*.json` | `CLIENTE_OWNED` | Locale copy for the site. | Original content. | Public site content |

### `public/`

| Path / pattern | Category | Reason | License | Expose |
|---|---|---|---|---|
| `public/donovan.jpeg` | `CLIENTE_OWNED` | Personal image asset. | Original asset. | Public |
| `public/iguazu.jpeg` | `CLIENTE_OWNED` | Personal image asset. | Original asset. | Public |
| `public/chalten.jpeg` | `CLIENTE_OWNED` | Personal image asset. | Original asset. | Public |
| `public/canada.jpeg` | `CLIENTE_OWNED` | Personal image asset. | Original asset. | Public |
| `public/profile.jpg` | `CLIENTE_OWNED` | Personal image asset. | Original asset. | Public |
| `public/criptec-logo-color.png` | `CLIENTE_OWNED` | Brand asset used by the author. | Requires review if it belongs to a separate brand. | Public |
| `public/criptec-logo-white.png` | `CLIENTE_OWNED` | Brand asset used by the author. | Requires review if it belongs to a separate brand. | Public |
| `public/visa-logo.svg` | `THIRD_PARTY_INTEGRATION` | Third-party brand asset used in a demo. | Brand / trademark terms apply. | Public demo only |

## Recommended Separation

1. `repo/app del autor`
   - Keep the site pages, messages, public assets, and author content here.
   - Keep routes, SEO wiring, and metadata generation in the app for this site only.

2. `paquete privado reusable`
   - Move reusable shell code into a private package if you want to share it across future personal projects.
   - Good candidates: `src/lib/seo/*`, `src/components/seo/*`, `src/components/ui/*`, `src/components/common/*`, `src/hooks/*`, `src/lib/utils.ts`, `src/i18n/*`.

3. `integraciones de terceros`
   - Keep provider-specific code isolated in `src/lib/google-docs.ts`, `src/lib/market-tokens.ts`, `src/lib/github-projects.ts`, `src/ai/*`, and `src/app/api/market/*`.
   - Keep provider secrets server-side only.

4. `contenido y assets externos`
   - Keep third-party logos, embeds, scripts, and brand assets segregated from original site assets.
   - Anything not authored by Donovan Riaño should be marked `requires legal/contractual review` before reuse outside this site.

## Review Flags

- `src/components/sections/github-contributions.tsx`
- `src/lib/google-docs.ts`
- `src/lib/market-tokens.ts`
- `src/app/api/market/*`
- `public/visa-logo.svg`
- Any imported asset or text not clearly authored by Donovan Riaño

