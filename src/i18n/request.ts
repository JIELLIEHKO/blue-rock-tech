// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';

const SUPPORTED = ['en', 'ua', 'pl', 'de', 'es'] as const;
type AppLocale = typeof SUPPORTED[number];
const DEFAULT_LOCALE: AppLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  const safe: AppLocale = SUPPORTED.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : DEFAULT_LOCALE;

  const messages = (await import(`./locales/${safe}.json`))
    .default as AbstractIntlMessages;

  return {locale: safe, messages};
});
