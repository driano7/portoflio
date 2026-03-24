import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";
import { Background } from '@/components/background';
import { SiteHeader } from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";
import { MobileDocNav } from "@/components/common/mobile-doc-nav";
import { ScrollToTopOnRoute } from "@/components/common/scroll-to-top-on-route";
import { resolveAppLocale } from "@/i18n/resolve-locale";
import { buildRootMetadata, resolveSiteUrl } from "@/lib/seo";
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const themeInitScript = `
(() => {
  try {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    let resolved = "";

    if (stored === "light" || stored === "dark" || stored === "dim") {
      resolved = stored;
    } else if (window.matchMedia) {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      resolved = "dark";
    }

    root.classList.remove("light", "dark", "dim");
    root.classList.add(resolved || "dark");
  } catch {
    document.documentElement.classList.add("dark");
  }
})();
`;

const metadataBase = resolveSiteUrl();
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${metadataBase.toString()}#website`,
      url: metadataBase.toString(),
      name: "Donovan Riaño",
      inLanguage: ["es-MX", "en-US"],
    },
    {
      "@type": "Person",
      "@id": `${metadataBase.toString()}#person`,
      name: "Donovan Riaño",
      url: metadataBase.toString(),
      jobTitle: "Creative Director & Computer Engineer",
      sameAs: [
        "https://www.linkedin.com/in/driano7",
        "https://github.com/driano7",
        "https://www.instagram.com/mrcripto_/",
        "https://www.tiktok.com/@mrcripto_",
      ],
    },
  ],
};

export const metadata: Metadata = buildRootMetadata();

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await resolveAppLocale();
  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon?v=20260326" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon?v=20260326" />
        <link rel="shortcut icon" href="/favicon.ico?v=20260326" />
        <link rel="manifest" href="/manifest.webmanifest?v=20260326" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              themes={["light", "dark", "dim"]}
              enableSystem
            >
            <Background />
            <SiteHeader />
            <ScrollToTopOnRoute />
            <div className="relative z-10">{children}</div>
            <MobileDocNav />
            <SiteFooter />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
