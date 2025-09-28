'use client';
import { Check } from 'lucide-react';
import { Card } from './primitives';

export function SLAsSection() {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">What you always get</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Clean, documented code in your repo</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Reproducible builds (Docker)</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> CI configured with basic tests</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Weekly demo & written updates</li>
        </ul>
      </Card>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Support & SLAs (optional)</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> 14‑day bugfix window (standard)</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> On‑call: business hours or 24/7</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Response & resolution targets</li>
          <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Monthly maintenance retainer</li>
        </ul>
      </Card>
    </>
  );
}