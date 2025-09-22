import {
  BookOpenText,
  FileText,
  LayoutTemplate,
  Database,
  Rocket,
  Video,
  Star,
} from 'lucide-react';
import type { ResourceType } from './types';


export const TYPE_META: Record<
  ResourceType,
  { label: ResourceType; icon: any; tint: string; dot: string }
> = {
  Guide: { label: 'Guide', icon: BookOpenText, tint: 'bg-primary/10 text-primary', dot: 'bg-primary' },
  Template: { label: 'Template', icon: LayoutTemplate, tint: 'bg-amber-500/10 text-amber-600', dot: 'bg-amber-500' },
  Dataset: { label: 'Dataset', icon: Database, tint: 'bg-emerald-500/10 text-emerald-700', dot: 'bg-emerald-500' },
  Example: { label: 'Example', icon: Rocket, tint: 'bg-fuchsia-500/10 text-fuchsia-700', dot: 'bg-fuchsia-500' },
  Video: { label: 'Video', icon: Video, tint: 'bg-rose-500/10 text-rose-600', dot: 'bg-rose-500' },
  Docs: { label: 'Docs', icon: FileText, tint: 'bg-sky-500/10 text-sky-700', dot: 'bg-sky-500' },
  Changelog: { label: 'Changelog', icon: Star, tint: 'bg-violet-500/10 text-violet-700', dot: 'bg-violet-500' },
};


export const TYPES: Array<'All' | ResourceType> = [
  'All',
  'Guide',
  'Template',
  'Dataset',
  'Example',
  'Video',
  'Docs',
  'Changelog',
];


export function isNew(dateIso?: string) {
  if (!dateIso) return false;
  const now = new Date();
  const d = new Date(dateIso);
  const diff = Number(now) - Number(d);
  return diff < 14 * 24 * 60 * 60 * 1000; // 14 days
}

export function formatDateUTC(dateIso?: string, locale: string = 'en-GB') {
  if (!dateIso) return '';
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC',
    }).format(new Date(dateIso));
  } catch {
    return dateIso.slice(0, 10); // fallback YYYY-MM-DD
  }
}