import type { MetadataRoute } from "next";

import { resolveSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = resolveSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [`${siteUrl.toString()}sitemap.xml`],
    host: siteUrl.origin,
  };
}

