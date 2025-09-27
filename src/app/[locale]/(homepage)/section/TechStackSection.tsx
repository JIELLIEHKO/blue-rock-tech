'use client';

import { useTranslations } from 'next-intl';

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
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-sm"
      style={{
        border: '1px solid var(--color-border)',
        color: 'var(--color-foreground)',
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </span>
  );
}

function Group({ title, items }: { title: string; items: Item[] }) {
  return (
    <div
      className="rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-card-foreground)',
        border: '1px solid var(--color-border)',
      }}
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Pill key={i.label}>
            {i.label}
            {i.note ? (
              <span style={{ color: 'var(--color-muted-foreground)' }}>
                &nbsp;· {i.note}
              </span>
            ) : null}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const t = useTranslations('tech');

  return (
    <section
      id="tech"
      className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-20"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3" style={{ color: 'var(--color-muted-foreground)' }}>
          {t('subtitle')}
        </p>
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
