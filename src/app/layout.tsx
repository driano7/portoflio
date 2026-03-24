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

const resolveMetadataBase = () => {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const normalized = rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
    ? rawUrl
    : `https://${rawUrl}`;

  return new URL(normalized);
};

const metadataBase = resolveMetadataBase();
const ogImageUrl = new URL("/donovan.jpeg", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: 'Donovan Riaño | Sitio personal',
  description:
    'Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Este es mi sitio personal con proyectos, investigación y construcción de soluciones digitales para negocio.',
  openGraph: {
    title: 'Donovan Riaño | Sitio personal',
    description:
      'Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Conoce mis proyectos, experiencia y visión.',
    url: metadataBase.toString(),
    siteName: 'Donovan Riaño',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 1200,
        alt: 'Donovan Riaño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donovan Riaño | Sitio personal',
    description:
      'Ingeniero en Computación y Creative Director. UX/UI, producto, Web3 e IA aplicados a soluciones reales.',
    images: [ogImageUrl],
  },
  manifest: "/manifest.webmanifest?v=20260326",
  icons: {
    icon: [{ url: "/icon?v=20260326", type: "image/png" }],
    apple: [{ url: "/apple-icon?v=20260326", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico?v=20260326"],
  },
};

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
