import type {
  SeoArticleEntity,
  SeoConfig,
  SeoContactPoint,
  SeoLocalBusinessEntity,
  SeoOrganizationEntity,
  SeoPostalAddress,
  SeoServiceEntity,
  SeoWebSiteEntity,
} from "@/lib/seo/types";
import { buildCanonicalUrl } from "@/lib/seo/url";

function organizationId(config: SeoConfig) {
  return `${new URL(config.site.siteUrl).origin}#organization`;
}

function websiteId(config: SeoConfig) {
  return `${new URL(config.site.siteUrl).origin}#website`;
}

function normalizeAreaServed(value: string | readonly string[] | undefined) {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return undefined;
  }

  return Array.isArray(value) ? [...value] : value;
}

function normalizeStringList(value: readonly string[] | undefined) {
  if (!value || value.length === 0) {
    return undefined;
  }

  return [...value];
}

function normalizeContactPoints(contactPoints: readonly SeoContactPoint[] | undefined) {
  if (!contactPoints || contactPoints.length === 0) {
    return undefined;
  }

  return contactPoints.map((contactPoint) => ({
    "@type": "ContactPoint" as const,
    contactType: contactPoint.contactType,
    telephone: contactPoint.telephone,
    email: contactPoint.email,
    areaServed: normalizeAreaServed(contactPoint.areaServed),
    availableLanguage: normalizeAreaServed(contactPoint.availableLanguage),
  }));
}

export interface BuildOrganizationEntityInput {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: readonly string[];
  telephone?: string;
  email?: string;
  contactPoint?: readonly SeoContactPoint[];
  address?: SeoPostalAddress;
}

export function buildOrganizationEntity(
  config: SeoConfig,
  input: BuildOrganizationEntityInput = {},
): SeoOrganizationEntity {
  const entity: SeoOrganizationEntity = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(config),
    name: input.name ?? config.brand.brandName,
    url: input.url ?? config.brand.brandUrl,
    logo: input.logo ?? config.brand.brandLogo,
  };

  const sameAs = normalizeStringList(input.sameAs ?? config.brand.brandSameAs);
  if (sameAs) {
    entity.sameAs = sameAs;
  }

  const telephone = input.telephone ?? config.brand.brandTelephone;
  if (telephone) {
    entity.telephone = telephone;
  }

  const email = input.email ?? config.brand.brandEmail;
  if (email) {
    entity.email = email;
  }

  const contactPoint = normalizeContactPoints(input.contactPoint ?? config.brand.brandContactPoints);
  if (contactPoint) {
    entity.contactPoint = contactPoint;
  }

  const address = input.address ?? config.brand.brandLocation;
  if (address) {
    entity.address = address;
  }

  return entity;
}

export interface BuildWebSiteEntityInput {
  name?: string;
  url?: string;
  inLanguage?: string | readonly string[];
  searchTarget?: string;
}

export function buildWebSiteEntity(
  config: SeoConfig,
  input: BuildWebSiteEntityInput = {},
): SeoWebSiteEntity {
  const entity: SeoWebSiteEntity = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(config),
    name: input.name ?? config.brand.brandName,
    url: input.url ?? config.site.siteUrl,
    publisher: {
      "@id": organizationId(config),
    },
    inLanguage: input.inLanguage ?? config.site.defaultLocale,
  };

  if (input.searchTarget) {
    entity.potentialAction = {
      "@type": "SearchAction",
      target: input.searchTarget,
      "query-input": "required name=search_term_string",
    };
  }

  return entity;
}

export interface BuildServiceEntityInput {
  name: string;
  slug?: string;
  path?: string;
  url?: string;
  description?: string;
  serviceType?: string;
  areaServed?: string | readonly string[];
}

export function buildServiceEntity(
  config: SeoConfig,
  input: BuildServiceEntityInput,
): SeoServiceEntity {
  const url = input.url ?? buildCanonicalUrl(config, input.path ?? `/servicios/${input.slug ?? ""}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    url,
    description: input.description,
    serviceType: input.serviceType,
    provider: {
      "@id": organizationId(config),
    },
    areaServed: normalizeAreaServed(input.areaServed) ?? normalizeAreaServed(config.brand.brandServiceArea),
  };
}

export interface BuildArticleEntityInput {
  kind: "Article" | "BlogPosting";
  headline: string;
  slug?: string;
  path?: string;
  url?: string;
  description?: string;
  image?: string | readonly string[];
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
  author?: {
    "@type": "Person" | "Organization";
    name: string;
  };
  inLanguage?: string;
}

export function buildArticleEntity(
  config: SeoConfig,
  input: BuildArticleEntityInput,
): SeoArticleEntity {
  const fallbackPath =
    input.path ?? (input.kind === "BlogPosting" ? `/blog/${input.slug ?? ""}` : `/casos/${input.slug ?? ""}`);
  const url = input.url ?? buildCanonicalUrl(config, fallbackPath);

  return {
    "@context": "https://schema.org",
    "@type": input.kind,
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    image: typeof input.image === "string" ? input.image : input.image ? [...input.image] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    articleSection: input.articleSection,
    author: input.author,
    publisher: {
      "@id": organizationId(config),
    },
    inLanguage: input.inLanguage ?? config.site.defaultLocale,
  };
}

export interface BuildLocalBusinessEntityInput {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: SeoPostalAddress;
  areaServed?: string | readonly string[];
  sameAs?: readonly string[];
}

export function buildLocalBusinessEntity(
  config: SeoConfig,
  input: BuildLocalBusinessEntityInput = {},
): SeoLocalBusinessEntity | null {
  const address = input.address ?? config.brand.brandLocation;
  if (!address) {
    return null;
  }

  const entity: SeoLocalBusinessEntity = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${new URL(config.site.siteUrl).origin}#localbusiness`,
    name: input.name ?? config.brand.brandName,
    url: input.url ?? config.brand.brandUrl,
    address,
  };

  const telephone = input.telephone ?? config.brand.brandTelephone;
  if (telephone) {
    entity.telephone = telephone;
  }

  const email = input.email ?? config.brand.brandEmail;
  if (email) {
    entity.email = email;
  }

  const sameAs = normalizeStringList(input.sameAs ?? config.brand.brandSameAs);
  if (sameAs) {
    entity.sameAs = sameAs;
  }

  const areaServed = normalizeAreaServed(input.areaServed ?? config.brand.brandServiceArea);
  if (areaServed) {
    entity.areaServed = areaServed;
  }

  return entity;
}
