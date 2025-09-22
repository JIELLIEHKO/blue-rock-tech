'use client';
import {useTranslations} from 'next-intl';
import CodeShowcase from '../components/CodeShowcase';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section id="hero" className="relative overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-48 h-[420px] blur-3xl"
        style={{
          background:
            'radial-gradient(40% 40% at 15% 10%, var(--color-primary) 0%, transparent 60%), radial-gradient(28% 28% at 90% 0%, var(--color-accent) 0%, transparent 60%)',
          opacity: 0.16
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-2 lg:py-24">
        <div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t('hero.subtitle')}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="rounded-xl bg-gradient-accent px-5 py-3 font-semibold text-black shadow-sm transition-transform hover:scale-[1.01]"
            >
              {t('pricing.estimate.cta')}
            </a>

            <a
              href="#examples"
              className="rounded-xl border border-border bg-card px-5 py-3 font-semibold hover:bg-card/70"
            >
              {t('hero.browse')}
              {/* или: t('use.title') — если не добавляешь отдельный ключ */}
            </a>
          </div>

          {/* эти пункты можно оставить хардкодом либо вынести в hero.highlights */}
          <ul className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            {[
              'Node.js • Python • Rust',
              'APIs, workers & schedulers',
              'Tests, logging & metrics'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: 'var(--color-primary)' }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="examples" className="order-first md:order-none">
          <CodeShowcase />
        </div>
      </div>
    </section>
  );
}
