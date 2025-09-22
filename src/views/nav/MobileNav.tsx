'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, type Lang } from './constants';
import LanguageDropdown from './LanguageDropdown';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  langOpen: boolean;
  toggleLang: () => void;
  langRef: React.RefObject<HTMLDivElement | null>;
};

export default function MobileNav({ lang, setLang, langOpen, toggleLang, langRef }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-6">
        <Link href="/" className="font-bold tracking-tight">Blue Rock Tech</Link>
        <div className="flex items-center justify-end">
          <button
            className="rounded-lg px-3 py-2 border"
            style={{ borderColor: 'var(--color-nav-border)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t" style={{ borderColor: 'var(--color-nav-border)' }}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <LanguageDropdown
                lang={lang}
                onChange={(l) => { setLang(l); }}
                open={langOpen}
                onToggle={toggleLang}
                containerRef={langRef}
                align="left"
              />
              <Link href="/auth/login" onClick={() => setMenuOpen(false)}>Log in</Link>
              <Link
                href="/start"
                className="rounded-lg px-3 py-1.5 font-semibold text-black bg-gradient-accent"
                onClick={() => setMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
