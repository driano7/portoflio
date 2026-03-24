import type { MetadataRoute } from "next";

import { educationGuides } from "@/lib/education-guides";
import { toAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/web3"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: toAbsoluteUrl("/web3/education"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = educationGuides.map((guide) => ({
    url: toAbsoluteUrl(`/web3/education/${guide.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...guideRoutes];
}

