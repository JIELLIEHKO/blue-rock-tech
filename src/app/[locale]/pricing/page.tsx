import {
  AlertCircle,
  BadgeDollarSign,
  BookOpenText,
  Bug,
  Check,
  ClipboardList,
  Clock,
  Database,
  Globe,
  Layers,
  LineChart,
  Minus,
  Rocket,
  Server,
  Shield,
  Wrench,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// ————————————————————————————————————————————
// SEO
// ————————————————————————————————————————————
export const metadata: Metadata = {
  title: "Pricing & estimates — Blue Rock Tech",
  description:
    "Transparent ballparks for automation tools, backend services, and bots. Get a free estimate or book a call for a precise fixed quote.",
  openGraph: {
    title: "Pricing & estimates — Blue Rock Tech",
    description:
      "Transparent ballparks for automation tools, backend services, and bots. Get a free estimate or book a call for a precise fixed quote.",
    type: "website",
  },
  alternates: { canonical: "/pricing" },
  keywords: [
    "software pricing",
    "backend service pricing",
    "automation tools cost",
    "bots and CLI apps",
    "MVP microservice cost",
    "Blue Rock Tech",
  ],
};

// ————————————————————————————————————————————
// Helper UI primitives (Tailwind + minimal elements)
// We avoid relying on external UI libs so this file works drop‑in.
// ————————————————————————————————————————————
function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CTAButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium border border-zinc-300 dark:border-zinc-700 hover:shadow-sm transition ${className}`}
    >
      {children}
    </Link>
  );
}

function Badge({ children }: React.PropsWithChildren) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full
      border border-slate-200 dark:border-slate-700
      bg-white/70 dark:bg-slate-800/80
      px-2.5 py-0.5 text-xs
      text-slate-700 dark:text-slate-200"
    >
      {children}
    </span>
  );
}

const featureMatrix: {
  key: string;
  label: string;
  tiers: ("prototype" | "startup" | "growth" | "custom" | null)[];
}[] = [
  { key: "singleService", label: "Single service/CLI", tiers: ["prototype", "startup", "growth"] },
  { key: "auth", label: "Auth & rate limits", tiers: [null, "startup", "growth"] },
  { key: "db", label: "PostgreSQL/Redis", tiers: [null, "startup", "growth"] },
  { key: "tests", label: "Unit & integration tests", tiers: ["prototype", "startup", "growth"] },
  { key: "cicd", label: "CI/CD pipeline", tiers: ["prototype", "startup", "growth"] },
  { key: "logging", label: "Logging & tracing", tiers: ["prototype", "startup", "growth"] },
  { key: "docker", label: "Dockerized build", tiers: ["prototype", "startup", "growth"] },
  { key: "k8s", label: "Kubernetes (optional)", tiers: [null, null, "growth"] },
  { key: "obs", label: "Observability & alerts", tiers: [null, null, "growth"] },
  { key: "security", label: "Security review", tiers: [null, null, "growth"] },
  { key: "docs", label: "Docs & handover", tiers: ["prototype", "startup", "growth"] },
  { key: "sla", label: "SLA / on‑call options", tiers: [null, null, "growth"] },
];

const addOns: { icon: React.ReactNode; title: string; desc: string; price: string }[] = [
  {
    icon: <Database className="h-4 w-4" />,
    title: "Dedicated DB schema",
    desc: "Migrations, seed, backups.",
    price: "$400–1,200",
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: "Worker & queue",
    desc: "BullMQ/Sidekiq‑style job runner.",
    price: "$600–1,600",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    title: "Schedulers & cron",
    desc: "Recurring jobs & retries.",
    price: "$300–900",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "OAuth / SSO",
    desc: "Google, GitHub, etc.",
    price: "$400–1,000",
  },
  {
    icon: <Wrench className="h-4 w-4" />,
    title: "Admin panel",
    desc: "Secure admin & audit log.",
    price: "$800–2,000",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "Multi‑tenancy",
    desc: "Org & role model.",
    price: "$800–2,400",
  },
  {
    icon: <Rocket className="h-4 w-4" />,
    title: "Payments (Stripe)",
    desc: "One‑off & subscriptions.",
    price: "$800–2,400",
  },
  {
    icon: <ClipboardList className="h-4 w-4" />,
    title: "Integrations",
    desc: "S3, Google Sheets, Telegram, etc.",
    price: "$300–1,200 ea.",
  },
  {
    icon: <LineChart className="h-4 w-4" />,
    title: "Analytics",
    desc: "Events & funnels.",
    price: "$300–1,200",
  },
  {
    icon: <Shield className="h-4 w-4" />,
    title: "Security hardening",
    desc: "Headers, secrets, threat model.",
    price: "$400–1,400",
  },
  {
    icon: <BookOpenText className="h-4 w-4" />,
    title: "Extra docs & runbooks",
    desc: "Playbooks & handover video.",
    price: "$200–600",
  },
  {
    icon: <Bug className="h-4 w-4" />,
    title: "Test pack",
    desc: "E2E + load tests.",
    price: "$500–1,500",
  },
];

export default function PricingPage() {
  return (
    <main className="relative">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_70%_10%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(40%_30%_at_10%_10%,rgba(16,185,129,0.10),transparent_60%)]" />

      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Pricing & estimates
            </h1>
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
            <CTAButton
              href="#estimate"
              className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            >
              Get a free estimate
            </CTAButton>
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="mx-auto max-w-6xl px-4 mt-10 grid gap-6 md:grid-cols-3">
        <TierCard
          title="Prototype"
          price="$1,500–3,000"
          note="Small scoped tool or bot · 1–2 weeks."
          cta={{ label: "Get a quote", href: "/contact" }}
          features={[
            "Single service/CLI",
            "Basic logging",
            "Dockerized build",
            "Light docs & handover",
          ]}
        />
        <TierCard
          highlight
          title="Startup"
          price="$5,000–12,000"
          note="MVP microservice with API & worker."
          cta={{ label: "Start estimation", href: "#estimate" }}
          features={[
            "Auth & rate limits",
            "PostgreSQL/Redis",
            "Unit & integration tests",
            "CI/CD pipeline",
          ]}
        />
        <TierCard
          title="Growth"
          price="Custom"
          note="Complex system or multiple services."
          cta={{ label: "Book a call", href: "/contact" }}
          features={[
            "Kubernetes (optional)",
            "Observability & alerts",
            "SLA/on‑call options",
            "Security reviews",
          ]}
        />
      </section>

      {/* Matrix */}
      <section className="mx-auto max-w-6xl px-4 mt-14">
        <h2 className="text-xl md:text-2xl font-semibold">What’s included by tier</h2>
        <Card className="mt-4 overflow-hidden">
          <div className="grid grid-cols-4 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/60 dark:bg-zinc-900/40">
            <div className="px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Feature
            </div>
            <div className="px-4 py-3 text-center font-semibold">Prototype</div>
            <div className="px-4 py-3 text-center font-semibold">Startup</div>
            <div className="px-4 py-3 text-center font-semibold">Growth</div>
          </div>
          <ul>
            {featureMatrix.map((row) => (
              <li
                key={row.key}
                className="grid grid-cols-4 border-t border-zinc-200/70 dark:border-zinc-800/70"
              >
                <div className="px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                  {row.label}
                </div>
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
          <AlertCircle className="h-4 w-4 mt-0.5" /> Final deliverables depend on your stack and
          integrations. We document assumptions in the quote.
        </p>
      </section>

      {/* Add‑ons */}
      <section className="mx-auto max-w-6xl px-4 mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Popular add‑ons</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mt-1">
              Mix & match to your scope. We’ll suggest essentials for MVP.
            </p>
          </div>
          <CTAButton href="/contact">Ask about add‑ons</CTAButton>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((x) => (
            <Card key={x.title} className="p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-zinc-700 dark:text-zinc-200">{x.icon}</div>
                <div>
                  <div className="font-medium">{x.title}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{x.desc}</div>
                </div>
                <div className="ms-auto text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {x.price}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="mx-auto max-w-6xl px-4 mt-14 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Fixed‑scope</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            We define scope together, break it into milestones, and quote a fixed price with
            timeline. Great for clearly defined MVPs and PoCs. Change‑requests are priced
            transparently.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Predictable budget & dates
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Milestone‑based payments
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Risk handled via assumptions
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Time & Materials</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            We work in weekly sprints, you can adjust priority anytime. Invoices reflect actual
            delivered effort with a capped weekly budget if desired.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Flexible scope & discovery work
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Weekly demo + progress notes
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Pause or scale team quickly
            </li>
          </ul>
        </Card>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 mt-14">
        <h2 className="text-xl md:text-2xl font-semibold">Process & typical timeline</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StepCard
            icon={<ClipboardList className="h-5 w-5" />}
            title="1) Discovery"
            time="1–2 days"
          >
            Share goals, constraints, and integrations. We map scope, risks, and acceptance.
          </StepCard>
          <StepCard
            icon={<BadgeDollarSign className="h-5 w-5" />}
            title="2) Proposal & quote"
            time="1–3 days"
          >
            Fixed price or T&M plan with milestones, deliverables, and assumptions.
          </StepCard>
          <StepCard icon={<Rocket className="h-5 w-5" />} title="3) Kickoff" time="Day 0">
            Repo, CI, environments, and first task ready. Weekly cadence starts.
          </StepCard>
          <StepCard icon={<Wrench className="h-5 w-5" />} title="4) Build" time="1–5 weeks">
            Iterative delivery with weekly demos. You can test at any time.
          </StepCard>
          <StepCard icon={<Shield className="h-5 w-5" />} title="5) Hardening" time="2–5 days">
            Tests, QA, logging, basic security review, performance pass.
          </StepCard>
          <StepCard icon={<BookOpenText className="h-5 w-5" />} title="6) Handover" time="1–2 days">
            Docs, runbook, and transfer. Optional support/SLA packages.
          </StepCard>
        </div>
      </section>

      {/* SLA */}
      <section className="mx-auto max-w-6xl px-4 mt-14 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">What you always get</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Clean, documented code in your
              repo
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Reproducible builds (Docker)
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> CI configured with basic tests
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Weekly demo & written updates
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Support & SLAs (optional)</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> 14‑day bugfix window (standard)
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> On‑call: business hours or 24/7
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Response & resolution targets
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> Monthly maintenance retainer
            </li>
          </ul>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 mt-14" id="faq">
        <h2 className="text-xl md:text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FAQ
            q="How accurate are the ranges?"
            a="They’re based on real projects with similar scope. After discovery we share a precise fixed quote or a weekly T&M plan with a cap."
          />
          <FAQ
            q="Can you work with our stack?"
            a="Yes. We commonly use Node/TypeScript, Python, Postgres/Redis, Docker, and popular clouds. If your stack differs, we adapt."
          />
          <FAQ
            q="Who owns the code?"
            a="You do. Everything lands in your organization repo with permissive licensing for your product."
          />
          <FAQ
            q="What about security & compliance?"
            a="We follow least‑privilege access, secret management, secure headers, and basic threat modeling. Formal audits can be arranged."
          />
          <FAQ
            q="Do you provide design or only backend?"
            a="We primarily build services, bots, and CLIs. For UI, we can ship admin panels and simple dashboards, or work with your design team."
          />
          <FAQ
            q="Payment terms?"
            a="Milestone‑based for fixed price; bi‑weekly for T&M. Invoice by bank transfer or Stripe. NDA available on request."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="estimate" className="mx-auto max-w-6xl px-4 mt-16 mb-24">
        <Card className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Need a precise estimate?</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300">
              Share a short brief and we’ll return with scope, milestones, and a fixed price or T&M
              plan.
            </p>
          </div>
          <div className="flex gap-3">
            <CTAButton
              href="/estimate"
              className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            >
              Get a free estimate
            </CTAButton>
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </Card>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate are the ranges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They’re based on real projects with similar scope. After discovery we share a precise fixed quote or a weekly T&M plan with a cap.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with our stack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We commonly use Node/TypeScript, Python, Postgres/Redis, Docker, and popular clouds. If your stack differs, we adapt.",
                },
              },
              {
                "@type": "Question",
                name: "Who owns the code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You do. Everything lands in your organization repo with permissive licensing for your product.",
                },
              },
              {
                "@type": "Question",
                name: "What about security & compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We follow least‑privilege access, secret management, secure headers, and basic threat modeling. Formal audits can be arranged.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide design or only backend?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We primarily build services, bots, and CLIs. For UI, we can ship admin panels and simple dashboards, or work with your design team.",
                },
              },
              {
                "@type": "Question",
                name: "Payment terms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Milestone‑based for fixed price; bi‑weekly for T&M. Invoice by bank transfer or Stripe. NDA available on request.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}

function TierCard({
  title,
  price,
  note,
  features,
  cta,
  highlight,
}: {
  title: string;
  price: string;
  note: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
}) {
  return (
    <Card className={`p-6 ${highlight ? "ring-2 ring-emerald-400/60" : ""}`}>
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
        <CTAButton
          href={cta.href}
          className={`w-full ${highlight ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : ""}`}
        >
          {cta.label}
        </CTAButton>
      </div>
    </Card>
  );
}

function StepCard({
  icon,
  title,
  time,
  children,
}: React.PropsWithChildren<{ icon: React.ReactNode; title: string; time: string }>) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-zinc-700 dark:text-zinc-200">{icon}</div>
        <div>
          <div className="font-medium flex items-center gap-2">
            {title}
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{time}</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{children}</p>
        </div>
      </div>
    </Card>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <Card className="p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{a}</p>
    </Card>
  );
}
