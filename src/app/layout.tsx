import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";
import { Background } from '@/components/background';
import { SiteHeader } from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";
import { ScrollToTopOnRoute } from "@/components/common/scroll-to-top-on-route";
import { resolveAppLocale } from "@/i18n/resolve-locale";
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const metadataBase =
  process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: 'Donovan Riaño | Sitio personal',
  description:
    'Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Este es mi sitio personal con proyectos, investigación y construcción de soluciones digitales para negocio.',
  openGraph: {
    title: 'Donovan Riaño | Sitio personal',
    description:
      'Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Conoce mis proyectos, experiencia y visión.',
    url: '/',
    siteName: 'Donovan Riaño',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/donovan.jpeg',
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
    images: ['/donovan.jpeg'],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>",
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
            <SiteFooter />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
