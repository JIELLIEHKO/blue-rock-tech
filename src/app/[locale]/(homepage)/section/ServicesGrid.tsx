'use client';

import {useTranslations} from 'next-intl';

type Svc = {title: string; desc: string};

export default function ServicesGrid() {
  const t = useTranslations('services');
  const items = (t.raw('items') as Svc[]) ?? [];

  return (
    <section className="w-full bg-background relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('title')}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h3 className="font-semibold text-card-foreground/90">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
