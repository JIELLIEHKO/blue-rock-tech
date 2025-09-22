'use client';
import type { PropsWithChildren } from 'react';
export default function Badge({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${className}`}>
{children}
</span>
  );
}