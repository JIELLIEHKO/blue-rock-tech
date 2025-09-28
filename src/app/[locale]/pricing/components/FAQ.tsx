'use client';
import { Card } from './primitives';

export function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <Card className="p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{a}</p>
    </Card>
  );
}