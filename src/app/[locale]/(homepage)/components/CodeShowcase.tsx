'use client';

import { useState } from 'react';

const SNIPPETS = {
  nodeService: String.raw`// Node.js microservice (Express)
import express from "express";
const app = express();
app.use(express.json());

app.post("/v1/process", async (req, res) => {
  const { payload } = req.body;
  const result = await compute(payload); // your domain logic
  res.json({ ok: true, result });
});

app.listen(8080, () => console.log("Service on :8080"));`,

  pythonBot: String.raw`# Python: simple Telegram bot (aiogram)
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
import asyncio, os

bot = Bot(token=os.getenv("TG_TOKEN"))
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message):
    await message.answer("Hello! Send me text, I'll echo it back.")

@dp.message()
async def echo(message: types.Message):
    await message.answer(message.text)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())`,

  rustCli: String.raw`// Rust: tiny CLI using clap
use clap::Parser;

#[derive(Parser, Debug)]
#[command(version, about = "File hash utility")]
struct Args {
    #[arg(short, long)]
    path: String,
}

fn main() {
    let args = Args::parse();
    let digest = std::fs::read(&args.path)
        .map(|b| format!("{:x}", md5::compute(b)))
        .unwrap();
    println!("{}", digest);
}`,

  ciSnippet: String.raw`# GitHub Actions: CI for Node
name: ci
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test --if-present
      - run: npm run build`,
} as const;

const TABS = [
  { key: 'nodeService', label: 'Backend Service', lang: 'ts' },
  { key: 'pythonBot', label: 'Bot / Automation', lang: 'py' },
  { key: 'rustCli', label: 'CLI Tool', lang: 'rs' },
  { key: 'ciSnippet', label: 'CI/CD', lang: 'yml' },
] as const;

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
      {/* внешняя градиентная рамка */}
      <div className="rounded-2xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] p-[1px] shadow-sm">
        {/* внутренняя карточка: цвета прямо из токенов */}
        <div
          className="rounded-2xl"
          style={{
            backgroundColor: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
          }}
        >
          {/* Header с табами и Copy */}
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

          {/* Код и мета-блоки */}
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

      {/* мягкое свечение под карточкой */}
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
