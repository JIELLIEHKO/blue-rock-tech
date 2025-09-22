export const LANGS = [
  { ui: 'EN', locale: 'en', name: 'English' },
  { ui: 'UA', locale: 'ua', name: 'Українська' },
  { ui: 'PL', locale: 'pl', name: 'Polski' },
  { ui: 'DE', locale: 'de', name: 'Deutsch' },
  { ui: 'ES', locale: 'es', name: 'Español' }
] as const;

export type Lang = typeof LANGS[number]['ui'];
export type AppLocale = typeof LANGS[number]['locale'];

export const UI_TO_LOCALE: Record<Lang, AppLocale> = {
  EN: 'en', UA: 'ua', PL: 'pl', DE: 'de', ES: 'es'
};
export const LOCALE_TO_UI: Record<AppLocale, Lang> = {
  en: 'EN', ua: 'UA', pl: 'PL', de: 'DE', es: 'ES'
};

export const LOCALES: AppLocale[] = LANGS.map(l => l.locale);

export const NAV_LINKS = [
  { href: '/#products', label: 'Products' },
  { href: '/#data-for-ai', label: 'Data for AI' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#resources', label: 'Resources' },
  { href: '/docs', label: 'Docs' } // пример обычного пути
] as const;
