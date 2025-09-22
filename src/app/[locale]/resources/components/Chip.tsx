'use client';
import type { PropsWithChildren } from 'react';
export default function Chip({ active, onClick, children }: PropsWithChildren<{ active?: boolean; onClick?: () => void }>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm transition ${
        active
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border/70 hover:border-foreground/30 text-foreground/70 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}