// src/app/[locale]/layout.tsx
import { ThemeProvider } from "@/app/providers/ThemeProvider"; // внутри 'use client'
import { Footer } from "@/views/Footer";
import NavBar from "@/views/nav/NavBar";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import "../globals.css";

export async function generateStaticParams() {
  return ["en", "ua", "pl", "de", "es"].map((locale) => ({ locale }));
}

function themeInitScript() {
  return `(function(){
    try {
      var t = localStorage.getItem('theme'); // 'light' | 'dark' | null
      if (!t) { t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
      var root = document.documentElement;
      root.setAttribute('data-theme', t);
    } catch (e) {}
  })();`;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages: any;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../i18n/locales/en.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
      </head>

      <body
        className="min-h-dvh"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
        }}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
