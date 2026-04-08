import type { SeoConfig, SeoPostalAddress } from "@/lib/seo/types";

function readList(value: string | undefined) {
  return value
    ?.split(",")
    .map((entry) => entry.trim())
    .filter(Boolean) ?? [];
}

function readOptional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function resolveSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    process.env.URL?.trim() ||
    process.env.DEPLOY_PRIME_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  return raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
}

const brandLocation: SeoPostalAddress | undefined = undefined;

// Reusable SEO config: keep site data here so metadata and JSON-LD builders stay pure.
export const seoConfig: SeoConfig = {
  brand: {
    brandName: readOptional(process.env.NEXT_PUBLIC_BRAND_NAME) ?? "Tu agencia",
    brandUrl: readOptional(process.env.NEXT_PUBLIC_BRAND_URL) ?? resolveSiteUrl(),
    brandLogo: readOptional(process.env.NEXT_PUBLIC_BRAND_LOGO) ?? "/apple-icon",
    brandDescription:
      readOptional(process.env.NEXT_PUBLIC_BRAND_DESCRIPTION) ??
      "Creación de sitios web y SEO técnico para empresas y negocios.",
    brandSameAs: readList(process.env.NEXT_PUBLIC_BRAND_SAMEAS),
    brandTelephone: readOptional(process.env.NEXT_PUBLIC_BRAND_TELEPHONE),
    brandEmail: readOptional(process.env.NEXT_PUBLIC_BRAND_EMAIL),
    brandLocation,
    brandServiceArea: readList(process.env.NEXT_PUBLIC_BRAND_SERVICE_AREA),
    brandContactPoints: [],
  },
  site: {
    siteUrl: resolveSiteUrl(),
    defaultLocale: readOptional(process.env.NEXT_PUBLIC_DEFAULT_LOCALE) ?? "es",
    locales: readList(process.env.NEXT_PUBLIC_SITE_LOCALES).length
      ? readList(process.env.NEXT_PUBLIC_SITE_LOCALES)
      : ["es", "en"],
    titleTemplate: readOptional(process.env.NEXT_PUBLIC_TITLE_TEMPLATE) ?? "%s | Tu agencia",
    defaultTitle: readOptional(process.env.NEXT_PUBLIC_DEFAULT_TITLE) ?? "Tu agencia",
    defaultDescription:
      readOptional(process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION) ??
      "Sitio web y SEO técnico para empresas y negocios.",
  },
};
