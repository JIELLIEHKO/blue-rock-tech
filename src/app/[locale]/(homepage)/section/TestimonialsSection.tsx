'use client';

import {useTranslations} from 'next-intl';

type Testimonial = { author: string; role: string; text: string };

function QuoteCard({ q }: { q: Testimonial }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <p className="text-sm leading-relaxed">&ldquo;{q.text}&rdquo;</p>
      <div className="mt-3 text-sm">
        <span className="font-semibold">{q.author}</span>
        <span className="opacity-70"> — {q.role}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const t = useTranslations('testi');

  const verticals = (t.raw('verticals') as string[]) ?? [];
  const quotes = (t.raw('quotes') as Testimonial[]) ?? [];

  return (
    <section id="testimonials" className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {verticals.map((name) => (
          <span key={name} className="rounded-xl border border-border px-3 py-1 text-sm opacity-80">
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
