import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Blue Rock Tech. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
