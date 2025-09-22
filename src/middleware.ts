import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ua', 'pl', 'de', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
} as const);

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };
