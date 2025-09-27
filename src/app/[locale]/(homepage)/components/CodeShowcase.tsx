'use client';

import { useState } from 'react';
import { SNIPPETS, TABS } from "@/app/[locale]/(homepage)/components/dataCodeShowcase";

export default function CodeShowcase() {
  const [active, setActive] =
    useState<(typeof TABS)[number]['key']>('nodeService');

  const code = SNIPPETS[active];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {}
  };

  return (
    <div className="relative">
      <div className="rounded-2xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] p-[1px] shadow-sm">
        <div
          className="rounded-2xl"
          style={{
            backgroundColor: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
          }}
        >
          <div
            className="flex flex-wrap items-center gap-2 px-3 py-2"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <div className="flex flex-1 flex-wrap items-center gap-1">
              {TABS.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={[
                      'rounded-md px-2.5 py-1.5 text-xs transition',
                      !isActive && 'hover:bg-[color:var(--color-background)]',
                    ].join(' ')}
                    style={{
                      border: '1px solid var(--color-border)',
                      backgroundColor: isActive
                        ? 'var(--color-background)'
                        : 'transparent',
                      color: isActive
                        ? 'var(--color-foreground)'
                        : 'color-mix(in oklab, var(--color-foreground) 80%, transparent)',
                    }}
                    aria-pressed={isActive}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={copy}
              className="rounded-md px-2.5 py-1.5 text-xs transition hover:bg-[color:var(--color-background)]"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-foreground)',
                backgroundColor: 'transparent',
              }}
              title="Copy snippet"
            >
              Copy
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <pre
              className="overflow-x-auto rounded-lg font-mono text-[13px] leading-relaxed"
              style={{
                backgroundColor: 'var(--color-card)',
                color: 'var(--color-card-foreground)',
                border: '1px solid var(--color-border)',
                padding: '1rem',
              }}
            >
              <code className="whitespace-pre">{code}</code>
            </pre>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  k: 'Runtime',
                  v:
                    active === 'pythonBot'
                      ? 'Python 3.11'
                      : active === 'rustCli'
                        ? 'Rust 1.79+'
                        : 'Node 20+',
                },
                { k: 'Testing', v: 'Unit + integration' },
                {
                  k: 'Deploy',
                  v: active === 'ciSnippet' ? 'GitHub Actions' : 'Docker container',
                },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  className="rounded-xl px-4 py-3"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    color: 'var(--color-card-foreground)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    className="text-[11px] uppercase tracking-wide"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    {k}
                  </div>
                  <div className="mt-1 text-sm font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-[1.25rem] opacity-20"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, var(--color-primary), transparent, var(--color-accent), transparent)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
}
