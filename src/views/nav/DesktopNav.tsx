'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import {
  UI_TO_LOCALE,
  LOCALE_TO_UI,
  LOCALES,
  type Lang,
  type AppLocale,
} from './constants';
import LanguageDropdown from './LanguageDropdown';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/app/components/Button';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  langOpen: boolean;
  toggleLang: () => void;
  langRef: React.RefObject<HTMLDivElement | null>;
};

function switchLocaleInPath(pathname: string, next: AppLocale) {
  const parts = pathname.split('/');
  if (parts[1] && LOCALES.includes(parts[1] as AppLocale)) parts[1] = next;
  else parts.splice(1, 0, next);
  return parts.join('/') || `/${next}`;
}

export default function DesktopNav({ langOpen, toggleLang, langRef }: Props) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;

  const router = useRouter();
  const pathname = usePathname() || '/';
  const search = useSearchParams();

  const uiLang: Lang = LOCALE_TO_UI[locale];

  // THEME
  const { theme, toggle } = useTheme(); // 'light' | 'dark'

  const onChangeLang = (ui: Lang) => {
    const nextLocale = UI_TO_LOCALE[ui];
    if (nextLocale === locale) return;
    const base = switchLocaleInPath(pathname, nextLocale);
    const query = search?.toString();
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const target = query ? `${base}?${query}${hash}` : `${base}${hash}`;
    router.push(target);
  };

  const home = `/${locale}`;
  const links = [
    { href: `${home}#products`, label: t('nav.products') },
    { href: `${home}#data-for-ai`, label: t('nav.dataForAi') },
    { href: `/${locale}/pricing`, label: t('nav.pricing') },
    { href: `/${locale}/resources`, label: t('nav.resources') },
    { href: `${home}#docs`, label: t('nav.docs') },
  ];

  return (
    <div className="hidden md:grid mx-auto h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
      <div className="flex items-center">
        <Link href={`/${locale}`} className="font-bold tracking-tight">
          Blue Rock Tech
        </Link>
      </div>

      <nav className="flex items-center gap-6 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="opacity-90 hover:opacity-100">
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-4 text-sm">
        {/* Theme toggle */}
        <Button
          onClick={toggle}
          variant="secondary"
          size="sm"
          leftIcon={theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </Button>

        <LanguageDropdown
          lang={uiLang}
          onChange={onChangeLang}
          open={langOpen}
          onToggle={toggleLang}
          containerRef={langRef}
          align="right"
        />

        <Link href="/auth/login" className="opacity-90 hover:opacity-100">
          {t('cta.login')}
        </Link>

        <Button href="/start" variant="default" size="md">
          {t('cta.start')}
        </Button>
      </div>
    </div>
  );
}
