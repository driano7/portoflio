import type { Metadata } from "next";

const DEFAULT_SITE_NAME = "Donovan Riaño";
const DEFAULT_TITLE = "Donovan Riaño | Sitio personal";
const DEFAULT_DESCRIPTION =
  "Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Este es mi sitio personal con proyectos, investigación y construcción de soluciones digitales para negocio.";
const DEFAULT_OG_DESCRIPTION =
  "Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Conoce mis proyectos, experiencia y visión.";
const DEFAULT_IMAGE_PATH = "/donovan.jpeg";

export function resolveSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const normalized =
    rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
      ? rawUrl
      : `https://${rawUrl}`;

  return new URL(normalized);
}

export function toAbsoluteUrl(path: string) {
  return new URL(path, resolveSiteUrl()).toString();
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  imagePath = DEFAULT_IMAGE_PATH,
}: BuildPageMetadataInput): Metadata {
  const metadataBase = resolveSiteUrl();
  const absoluteUrl = new URL(path, metadataBase).toString();
  const absoluteImageUrl = new URL(imagePath, metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: DEFAULT_SITE_NAME,
      type: "website",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 1200,
          alt: DEFAULT_SITE_NAME,
        },
      ],
    },
  };
}

export function buildRootMetadata(): Metadata {
  const metadataBase = resolveSiteUrl();
  const ogImageUrl = new URL(DEFAULT_IMAGE_PATH, metadataBase).toString();
  const facebookAppId =
    process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || process.env.FACEBOOK_APP_ID;

  const otherVerification: Record<string, string> = {};
  if (process.env.FACEBOOK_DOMAIN_VERIFICATION) {
    otherVerification["facebook-domain-verification"] =
      process.env.FACEBOOK_DOMAIN_VERIFICATION;
  }
  if (process.env.PINTEREST_SITE_VERIFICATION) {
    otherVerification["p:domain_verify"] = process.env.PINTEREST_SITE_VERIFICATION;
  }

  const verification: Metadata["verification"] = {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(Object.keys(otherVerification).length > 0 ? { other: otherVerification } : {}),
  };

  return {
    metadataBase,
    title: {
      default: DEFAULT_TITLE,
      template: "%s | Donovan Riaño",
    },
    description: DEFAULT_DESCRIPTION,
    alternates: {
      canonical: "/",
    },
    applicationName: DEFAULT_SITE_NAME,
    keywords: [
      "Donovan Riaño",
      "UX/UI",
      "Product Management",
      "Web3",
      "IA",
      "Crypto",
      "Portfolio",
    ],
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification,
    openGraph: {
      title: DEFAULT_TITLE,
      description: DEFAULT_OG_DESCRIPTION,
      url: metadataBase.toString(),
      siteName: DEFAULT_SITE_NAME,
      locale: "es_MX",
      alternateLocale: ["en_US"],
      type: "website",
      ...(facebookAppId ? { appId: facebookAppId } : {}),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1200,
          alt: DEFAULT_SITE_NAME,
        },
      ],
    },
    manifest: "/manifest.webmanifest?v=20260326",
    icons: {
      icon: [{ url: "/icon?v=20260326", type: "image/png" }],
      apple: [{ url: "/apple-icon?v=20260326", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico?v=20260326"],
    },
  };
}
