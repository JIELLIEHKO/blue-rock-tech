'use client';

import { useTranslations } from 'next-intl';

type Step = {
  k: string;
  title: string;
  text: string;
  bullets: string[];
};

function StepCard({ s }: { s: Step }) {
  return (
    <div
      className="relative rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-card-foreground)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="mb-3 inline-flex items-center gap-2">
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          STEP
        </span>
        <span className="text-sm font-semibold">{s.k}</span>
      </div>

      <h3 className="text-lg font-semibold">{s.title}</h3>

      <p
        className="mt-2 text-sm"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {s.text}
      </p>

      {!!s.bullets.length && (
        <ul className="mt-3 space-y-1 text-sm">
          {s.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 rounded-full opacity-70"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function HowItWorksSection() {
  const t = useTranslations('process');

  const stepKeys = ['step1', 'step2', 'step3', 'step4'] as const;
  const steps: Step[] = stepKeys.map((k, i) => ({
    k: String(i + 1).padStart(2, '0'),
    title: t(`${k}.title`),
    text: t(`${k}.text`),
    bullets: (t.raw(`${k}.bullets`) as string[]) ?? [],
  }));

  return (
    <section
      id="process"
      className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-20"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p
          className="mt-3"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          {t('subtitle')}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <StepCard key={s.k} s={s} />
        ))}
      </div>
    </section>
  );
}
