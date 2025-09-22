'use client';

import Link from 'next/link';
import { Star, Search } from 'lucide-react';
import { ResourceItem } from "@/app/[locale]/resources/types";
import { useResourceFilter } from "@/app/[locale]/resources/hooks/useResourceFilter";
import Kbd from "@/app/[locale]/resources/components/Kbd";
import { TYPES } from "@/app/[locale]/resources/constants";
import Chip from "@/app/[locale]/resources/components/Chip";
import ResourceCard from "@/app/[locale]/resources/components/ResourceCard";


export default function ResourcesClient({ items }: { items: ResourceItem[] }) {
  const { query, setQuery, activeType, setActiveType, filtered, featured, rest } = useResourceFilter(items);

  return (
    <main className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-card/60 p-6 md:p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Resources</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Guides, templates, datasets, and examples to help you ship faster. Fully aligned with our
              pay‑per‑row scrapers and backend services.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4" /> Updated regularly</span>
              <span>•</span>
              <span>Request a resource → <Link href="/contact" className="underline">/contact</Link></span>
            </div>
          </div>

          <div className="w-full max-w-md self-stretch md:self-auto">
            <label className="sr-only" htmlFor="resources-search">Search resources</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="resources-search"
                placeholder="Search guides, templates, datasets…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-2.5 outline-none ring-0 focus:border-foreground/40"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Tip: press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to jump to site search (if enabled).
            </p>
          </div>
        </div>


        <div className="mt-6 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <Chip key={t} active={activeType === t} onClick={() => setActiveType(t)}>
              {t}
            </Chip>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-semibold">Featured</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}


      <section className="mt-10">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-lg font-semibold">All resources</h2>
          <span className="text-sm text-muted-foreground">{filtered.length} items</span>
        </div>
        {rest.length === 0 && featured.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
            No results. Try a different search or filter.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-base font-semibold">Want something specific?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what would help you ship faster — we’ll add it to the queue.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Request a resource →
          </Link>
        </div>
      </section>


      <p className="mt-6 text-center text-xs text-muted-foreground">
        P.S. Update the <code>RESOURCES</code> array in <code>page.tsx</code> to curate this page.
      </p>
    </main>
  );
}