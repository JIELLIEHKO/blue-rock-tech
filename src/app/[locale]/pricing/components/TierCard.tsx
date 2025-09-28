'use client';
import { Check } from 'lucide-react';
import { Card, CTAButton } from './primitives';


export function TierCard({ title, price, note, features, cta, highlight }: { title: string; price: string; note: string; features: string[]; cta: { label: string; href: string }; highlight?: boolean; }) {
  return (
    <Card className={`p-6 ${highlight ? 'ring-2 ring-emerald-400/60' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-2xl font-semibold tracking-tight">{price}</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{note}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> {f}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <CTAButton href={cta.href} className={`w-full ${highlight ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : ''}`}>
          {cta.label}
        </CTAButton>
      </div>
    </Card>
  );
}