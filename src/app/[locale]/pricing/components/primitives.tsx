"use client";
import Link from "next/link";

export function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={[
        "rounded-2xl border shadow-sm",
        "border-[var(--color-border)]",
        "bg-[var(--color-card)]",
        "text-[var(--color-card-foreground)]",
        className,
      ].join(" ")}
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
      className={[
        "inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition",
        "border border-[var(--color-border)]",
        "hover:bg-[color:rgb(250,250,250)] dark:hover:bg-transparent",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export function Badge({ children }: React.PropsWithChildren) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs",
        "border border-[var(--color-border)]",
        "bg-[var(--color-card)]",
        "text-[var(--color-foreground)]",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
