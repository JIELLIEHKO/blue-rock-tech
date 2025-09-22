'use client';

import { useLangPicker } from './hooks/useLangPicker';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function NavBar() {
  const { lang, setLang, open, toggle, ref } = useLangPicker('EN');

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: 'color-mix(in hsl, var(--color-nav) 92%, transparent)',
        borderColor: 'var(--color-nav-border)',
        color: 'var(--color-nav-foreground)',
      }}
    >
      <DesktopNav
        lang={lang}
        setLang={setLang}
        langOpen={open}
        toggleLang={toggle}
        langRef={ref}
      />
      <MobileNav
        lang={lang}
        setLang={setLang}
        langOpen={open}
        toggleLang={toggle}
        langRef={ref}
      />
    </header>
  );
}
