// src/app/[locale]/layout.tsx
import { Footer } from "@/views/Footer";
import NavBar from "@/views/nav/NavBar";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import "../globals.css";

export async function generateStaticParams() {
  // можно брать из конфига, но проще зафиксировать список здесь
  return ["en", "ua", "pl", "de", "es"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // относительный путь от app/[locale]/layout.tsx к src/i18n/locales
  let messages: any;
  try {
    messages = (await import(`../../i18n/locales/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../i18n/locales/en.json`)).default;
  }

  return (
    <html lang={locale}>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <main className="bg-background">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
