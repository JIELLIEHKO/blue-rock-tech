import type { Metadata } from 'next';
import ResourcesClient from "@/app/[locale]/resources/ResourcesClient";
import { ResourceItem } from "@/app/[locale]/resources/types";

export const metadata: Metadata = {
  title: 'Resources — Blue Rock Tech',
  description:
    'Guides, templates, datasets, and examples to help you build automations, scrapers, and backend services faster.',
  openGraph: {
    title: 'Resources — Blue Rock Tech',
    description:
      'Guides, templates, datasets, and examples to help you build automations, scrapers, and backend services faster.',
    type: 'website',
  },
  alternates: { canonical: '/resources' },
};

const RESOURCES: ResourceItem[] = [
  {
    id: 'maps-playbook',
    title: 'Google Maps lead gen, end-to-end on a $100 budget',
    description:
      'Practical playbook: targeting, collection, normalization & dedupe, light enrichment, and outreach KPI math.',
    href: '/blog/google-maps-lead-generation-100-budget',
    type: 'Guide',
    tags: ['lead-gen', 'google-maps', 'playbook'],
    date: '2025-09-12',
    readTime: '12 min',
    featured: true,
  },
  {
    id: 'yt-comments-guide',
    title: 'YouTube Comments Scraper — setup & examples',
    description:
      'Step-by-step setup, filters, rate limits, and 3 realistic use cases with CSV snippets.',
    href: '/docs/scrapers/youtube-comments',
    type: 'Docs',
    tags: ['youtube', 'scraper', 'comments'],
    date: '2025-07-17',
    readTime: '9 min',
  },
  {
    id: 'linkedin-jobs-stepper',
    title: 'LinkedIn Jobs: multi-step form patterns (RHForm + Yup + React Query)',
    description:
      'A production-ready stepper pattern with validation, file upload parity, and summary rendering.',
    href: '/resources/examples/linkedin-jobs-stepper',
    type: 'Example',
    tags: ['react', 'nextjs', 'forms'],
    date: '2025-07-10',
    readTime: '7 min',
    featured: true,
  },
  {
    id: 'tiktok-comments-guide',
    title: 'TikTok Comments Scraper — merged steps UX',
    description:
      'Design rationale and final UX for merging Video IDs and Filters into a single streamlined step.',
    href: '/resources/examples/tiktok-comments-ux',
    type: 'Example',
    tags: ['ux', 'tiktok', 'forms'],
    date: '2025-07-17',
  },
  {
    id: 'icp-spreadsheet-template',
    title: 'ICP & categories spreadsheet (CSV/XLSX)',
    description:
      'A lightweight starter sheet to define your ICP one-liner, category set, and geo list.',
    href: '/resources/templates/icp-categories.xlsx',
    type: 'Template',
    tags: ['csv', 'xlsx', 'sales'],
    date: '2025-08-20',
  },
  {
    id: 'outreach-calculator',
    title: 'Outreach KPI calculator',
    description:
      'Quickly estimate Reply/Meeting/SQL rates, Cost/Lead, and time saved (rows × 2 min ÷ 60).',
    href: '/resources/templates/outreach-kpi-calculator.xlsx',
    type: 'Template',
    tags: ['kpi', 'sales', 'calculator'],
    date: '2025-09-03',
  },
  {
    id: 'sample-dataset',
    title: 'Sample dataset (1,000 rows) — mixed verticals',
    description:
      'A sanitized CSV demonstrating our schema: normalized fields, dedupe, and review stats.',
    href: '/resources/datasets/sample-1000.csv',
    type: 'Dataset',
    tags: ['csv', 'schema', 'sample'],
    date: '2025-08-02',
  },
  {
    id: 'api-docs',
    title: 'API & webhooks docs',
    description:
      'Authentication, endpoints, payload examples, and webhook signatures with replay protection.',
    href: '/docs/api',
    type: 'Docs',
    tags: ['api', 'webhooks', 'security'],
    date: '2025-06-30',
  },
  {
    id: 'changelog',
    title: 'Release notes & changelog',
    description:
      'All notable changes: new scrapers, UX tweaks, stability fixes, and pricing clarifications.',
    href: '/changelog',
    type: 'Changelog',
    tags: ['releases', 'versions'],
    date: '2025-09-01',
  },
  {
    id: 'demo-overview',
    title: 'Product overview (short video)',
    description:
      'A 3-minute walkthrough of how pay‑per‑row scrapers work, from run → export → outreach.',
    href: 'https://www.youtube.com/',
    type: 'Video',
    tags: ['demo', 'overview'],
    external: true,
    date: '2025-08-28',
  },
];

export default function Page() {
  return <ResourcesClient items={RESOURCES} />;
}