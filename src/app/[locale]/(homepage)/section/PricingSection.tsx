'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/app/components/Button';

type Tier = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
      <span>{children}</span>
    </li>
  );
}

function TierCard({ t }: { t: Tier }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-card-foreground)',
        border: `1px solid ${t.highlight ? 'color-mix(in oklab, var(--color-primary) 40%, var(--color-border) 60%)' : 'var(--color-border)'}`,
        boxShadow: t.highlight ? '0 0 0 1px color-mix(in oklab, var(--color-primary) 20%, transparent)' : undefined,
      }}
    >
      <h3 className="text-lg font-semibold">{t.name}</h3>
      <p className="mt-1 text-2xl font-bold">{t.price}</p>
      <p className="mt-1 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
        {t.desc}
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        {t.features.map((f) => (
          <Feature key={f}>{f}</Feature>
        ))}
      </ul>

      <div className="mt-6">
        <Button href="#contact" variant="secondary">
          {t.cta}
        </Button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const t = useTranslations('pricing');

  const tiers = (t.raw('tiers') as Tier[]) ?? [];
  const estText = t('estimate.text');
  const estCta = t('estimate.cta');

  return (
    <section
      id="pricing"
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

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.name} t={tier} />
        ))}
      </div>

      <div
        className="mt-8 rounded-2xl p-5 md:p-6"
        style={{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-card-foreground)',
          border: '1px solid var(--color-border)',
        }}
      >
        <h3 className="text-lg font-semibold">{t('estimate.title')}</h3>
        <p className="mt-1 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
          {estText}
        </p>
        <div className="mt-4">
          <Button href="#contact" variant="default">
            {estCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
