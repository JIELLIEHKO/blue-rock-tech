// components/ThemeToggle.tsx
'use client';

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";

export function ThemeToggle({ withSystem = true }: { withSystem?: boolean }) {
  const { theme, stored, set, toggle } = useTheme();

  return (
    <div className="inline-flex items-center gap-2">
      <button
        aria-label="Toggle theme"
        onClick={toggle}
        className="rounded-xl border border-border px-3 py-2 hover:bg-card transition"
        title={`Now: ${theme}`}
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>

      {withSystem && (
        <button
          aria-label="System theme"
          onClick={() => set("system")}
          className={`rounded-xl border px-3 py-2 transition ${
            stored === "system" ? "border-primary" : "border-border hover:bg-card"
          }`}
          title="Follow system"
        >
          <Monitor className="size-4" />
        </button>
      )}
    </div>
  );
}
