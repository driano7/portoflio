import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";
import { Background } from '@/components/background';
import { SiteHeader } from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";
import { MobileDocNav } from "@/components/common/mobile-doc-nav";
import { ScrollToTopOnRoute } from "@/components/common/scroll-to-top-on-route";
import { Seo } from "@/components/seo/Seo";
import { resolveAppLocale } from "@/i18n/resolve-locale";
import {
  buildOrganizationEntity,
  buildRootMetadata,
  buildWebSiteEntity,
  seoConfig,
} from "@/lib/seo";
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
        {/* Reusable site schema: safe to share across pages within this site. */}
        <Seo
          entities={[
            buildOrganizationEntity(seoConfig),
            buildWebSiteEntity(seoConfig, {
              inLanguage: [locale, ...seoConfig.site.locales.filter((item) => item !== locale)],
            }),
          ]}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon?v=20260326" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon?v=20260326" />
        <link rel="shortcut icon" href="/favicon.ico?v=20260326" />
        <link rel="manifest" href="/manifest.webmanifest?v=20260326" />
      </head>
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
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
            <div className="relative z-10 flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
              <MobileDocNav />
              <SiteFooter />
            </div>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
