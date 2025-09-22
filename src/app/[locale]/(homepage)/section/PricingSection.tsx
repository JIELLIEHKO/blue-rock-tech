'use client';

import {useTranslations} from 'next-intl';

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
      className={
        'rounded-2xl border p-6 bg-card ' +
        (t.highlight ? 'border-primary/40 ring-1 ring-primary/20' : 'border-border')
      }
    >
      <h3 className="text-lg font-semibold">{t.name}</h3>
      <p className="mt-1 text-2xl font-bold">{t.price}</p>
      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {t.features.map((f) => (
          <Feature key={f}>{f}</Feature>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl border px-4 py-2 font-medium hover:opacity-90"
        >
          {t.cta}
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const t = useTranslations('pricing');

  // карточки тарифов и блок точной оценки забираем из словаря
  const tiers = (t.raw('tiers') as Tier[]) ?? [];

  const estTitle = t('estimate.title');
  const estText = t('estimate.text');
  const estCta = t('estimate.cta');

  return (
    <section id="pricing" className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.name} t={tier} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-6">
        <h3 className="text-lg font-semibold">{estTitle}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{estText}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex rounded-xl border px-4 py-2 font-medium hover:opacity-90"
        >
          {estCta}
        </a>
      </div>
    </section>
  );
}
