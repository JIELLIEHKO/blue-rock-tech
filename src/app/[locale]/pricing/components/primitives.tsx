"use client";
import Link from "next/link";

export function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium border border-zinc-300 dark:border-zinc-700 hover:shadow-sm transition ${className}`}
    >
      {children}
    </Link>
  );
}

export function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-700 dark:text-slate-200">
      {children}
    </span>
  );
}
