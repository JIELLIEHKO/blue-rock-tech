import type { Metadata } from 'next';
import {
  BadgeDollarSign,
  Shield,
  Clock,
} from 'lucide-react';
import { Badge, Card, CTAButton } from "@/app/[locale]/pricing/components/primitives";
import { TierCard } from "@/app/[locale]/pricing/components/TierCard";
import { FeatureMatrixTable } from "@/app/[locale]/pricing/components/FeatureMatrixTable";
import { AddOnsGrid } from "@/app/[locale]/pricing/components/AddOnsGrid";
import { EngagementModels } from "@/app/[locale]/pricing/components/EngagementModels";
import { ProcessSection } from "@/app/[locale]/pricing/components/ProcessSection";
import { SLAsSection } from "@/app/[locale]/pricing/components/SLAsSection";
import { FAQSchema } from "@/app/[locale]/pricing/schema/FAQSchema";
import { featureMatrix, addOns, faq } from "@/app/[locale]/pricing/hooks/pricingData";
import { FAQ } from "@/app/[locale]/pricing/components/FAQ";

export const metadata: Metadata = {
  title: 'Pricing & estimates — Blue Rock Tech',
  description:
    'Transparent ballparks for automation tools, backend services, and bots. Get a free estimate or book a call for a precise fixed quote.',
  openGraph: {
    title: 'Pricing & estimates — Blue Rock Tech',
    description:
      'Transparent ballparks for automation tools, backend services, and bots. Get a free estimate or book a call for a precise fixed quote.',
    type: 'website',
  },
  alternates: { canonical: '/pricing' },
  keywords: [
    'software pricing',
    'backend service pricing',
    'automation tools cost',
    'bots and CLI apps',
    'MVP microservice cost',
    'Blue Rock Tech',
  ],
};

export default function PricingPage() {

  return (
    <main className="relative">

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_70%_10%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(40%_30%_at_10%_10%,rgba(16,185,129,0.10),transparent_60%)]" />

      <section className="mx-auto max-w-7xl px-4 pt-12 md:pt-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Pricing & estimates</h1>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
              Transparent ballparks. Final quote depends on scope, integrations, and SLA. Most MVPs
              land in the <strong>$5k–12k</strong> range with 2–5 weeks of delivery.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge>
                <BadgeDollarSign className="h-3 w-3" /> Fixed‑scope or T&M
              </Badge>
              <Badge>
                <Shield className="h-3 w-3" /> Code ownership
              </Badge>
              <Badge>
                <Clock className="h-3 w-3" /> Weekly demos
              </Badge>
            </div>
          </div>
          <div className="flex gap-3">
            <CTAButton href="#estimate" className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              Get a free estimate
            </CTAButton>
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-10 grid gap-6 md:grid-cols-3">
        <TierCard
          title="Prototype"
          price="$1,500–3,000"
          note="Small scoped tool or bot · 1–2 weeks."
          cta={{ label: 'Get a quote', href: '/contact' }}
          features={[
            'Single service/CLI',
            'Basic logging',
            'Dockerized build',
            'Light docs & handover',
          ]}
        />
        <TierCard
          highlight
          title="Startup"
          price="$5,000–12,000"
          note="MVP microservice with API & worker."
          cta={{ label: 'Start estimation', href: '#estimate' }}
          features={['Auth & rate limits', 'PostgreSQL/Redis', 'Unit & integration tests', 'CI/CD pipeline']}
        />
        <TierCard
          title="Growth"
          price="Custom"
          note="Complex system or multiple services."
          cta={{ label: 'Book a call', href: '/contact' }}
          features={['Kubernetes (optional)', 'Observability & alerts', 'SLA/on‑call options', 'Security reviews']}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <FeatureMatrixTable rows={featureMatrix} />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <AddOnsGrid items={addOns} />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14 grid gap-6 md:grid-cols-2">
        <EngagementModels />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14">
        <ProcessSection />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14 grid gap-6 md:grid-cols-2">
        <SLAsSection />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-14" id="faq">
        <h2 className="text-xl md:text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.map(({ q, a }) => (
            <FAQ key={q} q={q} a={a} />
          ))}
        </div>
      </section>

      <section id="estimate" className="mx-auto max-w-7xl px-4 mt-16 mb-24">
        <Card className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Need a precise estimate?</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300">
              Share a short brief and we’ll return with scope, milestones, and a fixed price or T&M plan.
            </p>
          </div>
          <div className="flex gap-3">
            <CTAButton href="/estimate" className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              Get a free estimate
            </CTAButton>
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </Card>
      </section>

      <FAQSchema items={faq} />
    </main>
  );
}