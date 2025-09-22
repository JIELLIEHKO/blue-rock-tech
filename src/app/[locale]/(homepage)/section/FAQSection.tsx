'use client';

import { useState } from 'react';

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: 'Which technologies do you use?',
    a: 'Primarily Node.js/TypeScript, Python and selective Rust. PostgreSQL, Redis, S3; Docker by default, Kubernetes on demand.',
  },
  {
    q: 'How do you ensure reliability?',
    a: 'We add unit and integration tests, retries, idempotent operations, structured logging, metrics and health checks.',
  },
  {
    q: 'What about security?',
    a: 'Secrets in env/secret stores, least-privilege access, dependency scans, container image scans, and review gates in CI.',
  },
  {
    q: 'How do we work together?',
    a: 'Discovery → architecture → build → deploy. Demos every 1–2 weeks, shared backlog and clear acceptance criteria.',
  },
  {
    q: 'Do you support and maintain?',
    a: 'Yes. We offer handover packages and optional SLA/on-call support depending on your needs.',
  },
  {
    q: 'Fixed price or time & materials?',
    a: 'Both. For well-defined scope we can fix the price. Otherwise T&M with transparent weekly reports.',
  },
];

function Item({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-5 py-4 text-left"
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{qa.q}</span>
          <span className="text-xl leading-none">{open ? '–' : '+'}</span>
        </div>
      </button>
      {open ? <div className="px-5 pb-5 text-sm text-muted-foreground">{qa.a}</div> : null}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <p className="mt-3 text-muted-foreground">
          Short answers to the most common questions. Ping us if you need more details.
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {faqs.map((qa) => (
          <Item key={qa.q} qa={qa} />
        ))}
      </div>
    </section>
  );
}
