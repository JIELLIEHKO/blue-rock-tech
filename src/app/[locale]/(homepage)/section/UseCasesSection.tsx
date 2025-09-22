'use client';

import {useTranslations} from 'next-intl';

type UseCase = { title: string; text: string; tags: string[] };

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs">
      {children}
    </span>
  );
}

function Card({ uc }: { uc: UseCase }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <h3 className="text-lg font-semibold">{uc.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{uc.text}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {uc.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  const t = useTranslations('use');
  const items = (t.raw('items') as UseCase[]) ?? [];

  return (
    <section id="use-cases" className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
        {items.map((uc) => (
          <Card key={uc.title} uc={uc} />
        ))}
      </div>
    </section>
  );
}
