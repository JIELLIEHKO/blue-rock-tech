import { FeatureRow } from "@/app/[locale]/pricing/components/FeatureMatrixTable";

export type IconKey =
  | 'database' | 'server' | 'clock' | 'globe' | 'wrench' | 'layers'
  | 'rocket' | 'clipboardList' | 'lineChart' | 'shield' | 'bookOpenText' | 'bug';

export type AddOnData = {
  iconKey: IconKey;
  title: string;
  desc: string;
  price: string;
};

export const featureMatrix: FeatureRow[] = [
  { key: 'singleService', label: 'Single service/CLI', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'auth', label: 'Auth & rate limits', tiers: [null, 'startup', 'growth'] },
  { key: 'db', label: 'PostgreSQL/Redis', tiers: [null, 'startup', 'growth'] },
  { key: 'tests', label: 'Unit & integration tests', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'cicd', label: 'CI/CD pipeline', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'logging', label: 'Logging & tracing', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'docker', label: 'Dockerized build', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'k8s', label: 'Kubernetes (optional)', tiers: [null, null, 'growth'] },
  { key: 'obs', label: 'Observability & alerts', tiers: [null, null, 'growth'] },
  { key: 'security', label: 'Security review', tiers: [null, null, 'growth'] },
  { key: 'docs', label: 'Docs & handover', tiers: ['prototype', 'startup', 'growth'] },
  { key: 'sla', label: 'SLA / on-call options', tiers: [null, null, 'growth'] },
];

export const addOns: AddOnData[] = [
  { iconKey: 'database',       title: 'Dedicated DB schema',  desc: 'Migrations, seed, backups.',                 price: '$400–1,200' },
  { iconKey: 'server',         title: 'Worker & queue',       desc: 'BullMQ/Sidekiq-style job runner.',          price: '$600–1,600' },
  { iconKey: 'clock',          title: 'Schedulers & cron',    desc: 'Recurring jobs & retries.',                 price: '$300–900' },
  { iconKey: 'globe',          title: 'OAuth / SSO',          desc: 'Google, GitHub, etc.',                      price: '$400–1,000' },
  { iconKey: 'wrench',         title: 'Admin panel',          desc: 'Secure admin & audit log.',                 price: '$800–2,000' },
  { iconKey: 'layers',         title: 'Multi-tenancy',        desc: 'Org & role model.',                         price: '$800–2,400' },
  { iconKey: 'rocket',         title: 'Payments (Stripe)',    desc: 'One-off & subscriptions.',                  price: '$800–2,400' },
  { iconKey: 'clipboardList',  title: 'Integrations',         desc: 'S3, Google Sheets, Telegram, etc.',         price: '$300–1,200 ea.' },
  { iconKey: 'lineChart',      title: 'Analytics',            desc: 'Events & funnels.',                         price: '$300–1,200' },
  { iconKey: 'shield',         title: 'Security hardening',   desc: 'Headers, secrets, threat model.',           price: '$400–1,400' },
  { iconKey: 'bookOpenText',   title: 'Extra docs & runbooks',desc: 'Playbooks & handover video.',               price: '$200–600' },
  { iconKey: 'bug',            title: 'Test pack',            desc: 'E2E + load tests.',                          price: '$500–1,500' },
];

export const faq = [
  { q: 'How accurate are the ranges?', a: 'They’re based on real projects with similar scope. After discovery we share a precise fixed quote or a weekly T&M plan with a cap.' },
  { q: 'Can you work with our stack?', a: 'Yes. We commonly use Node/TypeScript, Python, Postgres/Redis, Docker, and popular clouds. If your stack differs, we adapt.' },
  { q: 'Who owns the code?', a: 'You do. Everything lands in your organization repo with permissive licensing for your product.' },
  { q: 'What about security & compliance?', a: 'We follow least-privilege access, secret management, secure headers, and basic threat modeling. Formal audits can be arranged.' },
  { q: 'Do you provide design or only backend?', a: 'We primarily build services, bots, and CLIs. For UI, we can ship admin panels and simple dashboards, or work with your design team.' },
  { q: 'Payment terms?', a: 'Milestone-based for fixed price; bi-weekly for T&M. Invoice by bank transfer or Stripe. NDA available on request.' },
];
