'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, type Lang } from './constants';
import LanguageDropdown from './LanguageDropdown';
import { ThemeToggle } from '@/app/providers/ThemeToggle';
import { Menu, X } from "lucide-react";

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  langOpen: boolean;
  toggleLang: () => void;
  langRef: React.RefObject<HTMLDivElement | null>;
};

export default function MobileNav({ lang, setLang, langOpen, toggleLang, langRef }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="md:hidden">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_auto] items-center px-6 gap-3">
        <Link href="/" className="font-bold tracking-tight">
          Blue Rock Tech
        </Link>

        <div className="flex items-center justify-end">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--color-nav-border)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t"
          style={{ borderColor: 'var(--color-nav-border)' }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={closeMenu} className="opacity-90 hover:opacity-100">
                {l.label}
              </Link>
            ))}

            <div className="mt-3 h-px w-full" style={{ background: 'var(--color-nav-border)' }} />

            <div className="mt-3 flex items-center gap-3">
              <ThemeToggle withSystem={false} />
              <LanguageDropdown
                lang={lang}
                onChange={(l) => { setLang(l); }}
                open={langOpen}
                onToggle={toggleLang}
                containerRef={langRef}
                align="left"
              />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <Link href="/auth/login" onClick={closeMenu} className="opacity-90 hover:opacity-100">
                Log in
              </Link>
              <Link
                href="/start"
                className="rounded-lg px-3 py-1.5 font-semibold text-black bg-gradient-accent"
                onClick={closeMenu}
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
