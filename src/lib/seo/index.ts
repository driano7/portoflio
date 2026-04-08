export * from "@/lib/seo/buildBreadcrumbs";
export * from "@/lib/seo/buildJsonLd";
export * from "@/lib/seo/buildMetadata";
export * from "@/lib/seo/config";
export * from "@/lib/seo/entities";
export * from "@/lib/seo/types";
export * from "@/lib/seo/url";

import { seoConfig } from "@/lib/seo/config";

// Public façade for reusable SEO primitives. Keep app imports pointed here.
export const SITE_NAME = seoConfig.brand.brandName;
export const SITE_DESCRIPTION = seoConfig.brand.brandDescription;
export const SOCIAL_LINKS = seoConfig.brand.brandSameAs;
export { seoConfig };
