'use client';

import {useTranslations} from 'next-intl';

type Item = { label: string; note?: string };

const langs: Item[] = [
  { label: 'Node.js 20+' },
  { label: 'Python 3.11+' },
  { label: 'Rust (selective)' },
  { label: 'TypeScript' }
];
const infra: Item[] = [
  { label: 'Docker / OCI' },
  { label: 'Kubernetes (on demand)' },
  { label: 'Nginx / Traefik' },
  { label: 'Background workers & schedulers' }
];
const dataLayer: Item[] = [
  { label: 'PostgreSQL' },
  { label: 'Redis' },
  { label: 'S3-compatible storage' },
  { label: 'gRPC / REST / Webhooks' }
];
const quality: Item[] = [
  { label: 'Unit & integration tests' },
  { label: 'Logging, metrics, tracing' },
  { label: 'GitHub Actions CI/CD' },
  { label: 'Container security & scans' }
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm">
      {children}
    </span>
  );
}

function Group({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="rounded-2xl border border-border p-5 md:p-6 bg-card">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Pill key={i.label}>
            {i.label}
            {i.note ? <span className="opacity-70">&nbsp;· {i.note}</span> : null}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const t = useTranslations('tech');

  return (
    <section id="tech" className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
        <Group title={t('group.languages')} items={langs} />
        <Group title={t('group.infrastructure')} items={infra} />
        <Group title={t('group.data')} items={dataLayer} />
        <Group title={t('group.quality')} items={quality} />
      </div>
    </section>
  );
}
