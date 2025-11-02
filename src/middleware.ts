import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['en', 'ua', 'pl', 'de', 'es'] as const;
const defaultLocale = 'en';

const intl = createIntlMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always'
} as const);

const protectedPrefixes = ['/dashboard', '/account'];

function stripLocale(pathname: string) {
  const re = new RegExp(`^/(?:${locales.join('|')})(?=/|$)`, 'i');
  return pathname.replace(re, '') || '/';
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api')) return NextResponse.next();

  const intlRes = intl(req);
  if (intlRes && (intlRes.headers.get('x-middleware-rewrite') || intlRes.redirected)) {
    return intlRes;
  }

  const pathNoLocale = stripLocale(pathname);
  const isProtected = protectedPrefixes.some(p => pathNoLocale.startsWith(p));
  if (!isProtected) return intlRes ?? NextResponse.next();

  const token = req.cookies.get('auth')?.value;
  if (token) return intlRes ?? NextResponse.next();

  const locale = pathname.split('/')[1] || defaultLocale;
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}/auth/login`;
  url.searchParams.set('from', req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
