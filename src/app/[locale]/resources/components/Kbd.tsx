'use client';
import type { PropsWithChildren } from 'react';
export default function Kbd({ children }: PropsWithChildren) {
  return <kbd className="rounded border bg-muted/30 px-1.5 py-0.5 text-[11px] font-mono">{children}</kbd>;
}