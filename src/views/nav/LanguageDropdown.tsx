"use client";
import { LANGS, type Lang } from "./constants";

type Props = {
  lang: Lang;
  onChange: (l: Lang) => void;
  open: boolean;
  onToggle: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  align?: "left" | "right";
};

export default function LanguageDropdown({
  lang,
  onChange,
  open,
  onToggle,
  containerRef,
  align = "right",
}: Props) {
  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex items-center gap-1 rounded-md px-2 py-1.5 border"
        style={{ borderColor: "var(--color-nav-border)" }}
        onClick={onToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span>{lang}</span>
        <span aria-hidden>▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-2 min-w-28 overflow-hidden rounded-lg border bg-[var(--color-nav)] text-[var(--color-nav-foreground)] shadow-lg`}
          style={{ borderColor: "var(--color-nav-border)" }}
        >
          {LANGS.map((opt) => (
            <li key={opt.ui}>
              <button
                role="option"
                aria-selected={opt.ui === lang}
                className="block w-full px-3 py-2 text-left opacity-90 hover:opacity-100"
                onClick={() => {
                  onChange(opt.ui);
                  onToggle();
                }}
              >
                {opt.ui}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
