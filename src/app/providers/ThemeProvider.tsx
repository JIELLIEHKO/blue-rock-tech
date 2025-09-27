// app/providers/ThemeProvider.tsx
"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type Stored = Theme | "system";

type Ctx = {
  theme: Theme;
  stored: Stored;
  set: (v: Stored) => void;
  toggle: () => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [stored, setStored] = useState<Stored>("system");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const ls = (localStorage.getItem("theme") as Stored | null) || "system";
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (s: Stored) => {
      const t: Theme = s === "system" ? (mq.matches ? "dark" : "light") : s;
      document.documentElement.dataset.theme = t;
      setTheme(t);
    };
    setStored(ls);
    apply(ls);
    const onChange = () => stored === "system" && apply("system");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const set = useCallback((v: Stored) => {
    setStored(v);
    if (v === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", v);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const t: Theme = v === "system" ? (mq.matches ? "dark" : "light") : v;
    document.documentElement.dataset.theme = t;
    setTheme(t);
  }, []);

  const toggle = useCallback(() => set(theme === "dark" ? "light" : "dark"), [theme, set]);

  const value = useMemo(() => ({ theme, stored, set, toggle }), [theme, stored, set, toggle]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
