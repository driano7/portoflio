import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
<<<<<<< HEAD
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Background } from '@/components/background';
=======
>>>>>>> 8873152 (agregame el botón para elegir los temas (light, dark, dim) del lado supe)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Donovan Riaño | Portfolio',
  description: "Donovan Riaño's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
<<<<<<< HEAD
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <div className="absolute top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
=======
          themes={["light", "dark", "dim"]}
        >
>>>>>>> 8873152 (agregame el botón para elegir los temas (light, dark, dim) del lado supe)
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
