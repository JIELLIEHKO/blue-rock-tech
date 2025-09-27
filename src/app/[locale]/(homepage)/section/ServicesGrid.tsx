'use client';

import { useTranslations } from 'next-intl';

type Svc = { title: string; desc: string };

export default function ServicesGrid() {
  const t = useTranslations('services');
  const items = (t.raw('items') as Svc[]) ?? [];

  return (
    <section
      className="w-full relative z-10"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('title')}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                backgroundColor: 'var(--color-card)',
                color: 'var(--color-card-foreground)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="font-semibold">{it.title}</h3>
              <p
                className="mt-2 text-sm"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
