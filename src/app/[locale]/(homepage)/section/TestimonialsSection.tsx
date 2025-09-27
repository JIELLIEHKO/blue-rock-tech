'use client';

import { useTranslations } from 'next-intl';

type Testimonial = { author: string; role: string; text: string };

function QuoteCard({ q }: { q: Testimonial }) {
  return (
    <div
      className="rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-card-foreground)',
        border: '1px solid var(--color-border)',
      }}
    >
      <p className="text-sm leading-relaxed">&ldquo;{q.text}&rdquo;</p>
      <div className="mt-3 text-sm">
        <span className="font-semibold">{q.author}</span>
        <span style={{ color: 'var(--color-muted-foreground)' }}> — {q.role}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const t = useTranslations('testi');

  const verticals = (t.raw('verticals') as string[]) ?? [];
  const quotes = (t.raw('quotes') as Testimonial[]) ?? [];

  return (
    <section
      id="testimonials"
      className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-20"
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}
    >
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3" style={{ color: 'var(--color-muted-foreground)' }}>
          {t('subtitle')}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {verticals.map((name) => (
          <span
            key={name}
            className="rounded-xl px-3 py-1 text-sm"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-foreground)',
              backgroundColor: 'transparent',
              opacity: 0.85,
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
        {quotes.map((q) => (
          <QuoteCard key={`${q.author}-${q.role}`} q={q} />
        ))}
      </div>
    </section>
  );
}
