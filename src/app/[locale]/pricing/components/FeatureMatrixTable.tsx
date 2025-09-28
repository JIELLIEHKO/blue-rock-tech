'use client';
import { Check, Minus, AlertCircle } from 'lucide-react';
import { Card } from './primitives';

export type FeatureRow = { key: string; label: string; tiers: ('prototype' | 'startup' | 'growth' | 'custom' | null)[] };

export function FeatureMatrixTable({ rows }: { rows: FeatureRow[] }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">What’s included by tier</h2>
      <Card className="mt-4 overflow-hidden">
        <div className="grid grid-cols-4 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/60 dark:bg-zinc-900/40">
          <div className="px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">Feature</div>
          <div className="px-4 py-3 text-center font-semibold">Prototype</div>
          <div className="px-4 py-3 text-center font-semibold">Startup</div>
          <div className="px-4 py-3 text-center font-semibold">Growth</div>
        </div>
        <ul>
          {rows.map((row) => (
            <li key={row.key} className="grid grid-cols-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
              <div className="px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">{row.label}</div>
              {[0, 1, 2].map((i) => (
                <div key={i} className="px-4 py-3 flex items-center justify-center">
                  {row.tiers[i] ? (
                    <Check className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Minus className="h-5 w-5 text-zinc-300 dark:text-zinc-700" />
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </Card>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
        <AlertCircle className="h-4 w-4 mt-0.5" /> Final deliverables depend on your stack and integrations. We document assumptions in the quote.
      </p>
    </div>
  );
}