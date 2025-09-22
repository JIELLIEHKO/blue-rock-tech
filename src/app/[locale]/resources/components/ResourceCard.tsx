'use client';

import { ArrowRight, Clock, LinkIcon, Tag as TagIcon } from 'lucide-react';
import Link from 'next/link';
import { TYPE_META, isNew } from '../constants';
import type { ResourceItem } from '../types';
import Badge from './Badge';

const DATE_FMT = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'UTC',
});


function parseISODate(dateStr: string) {
  const iso = dateStr.length <= 10 ? `${dateStr}T00:00:00.000Z` : dateStr;
  return new Date(iso);
}

export default function ResourceCard({ item }: { item: ResourceItem }) {
  const meta = TYPE_META[item.type];
  const Icon = meta.icon;
  const newish = isNew(item.date);

  const content = (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${meta.tint}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Badge className={`${meta.tint} ring-1 ring-inset ring-transparent`}>{meta.label}</Badge>
            {newish && (
              <Badge className="bg-green-500/10 text-green-700">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500" /> NEW
              </Badge>
            )}
            {item.external && (
              <Badge className="bg-border text-foreground/70">
                <LinkIcon className="mr-1 h-3.5 w-3.5" />
                External
              </Badge>
            )}
          </div>

          <h3 className="mt-2 text-base font-semibold leading-snug text-foreground group-hover:underline">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>

          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full border border-dashed border-border px-2 py-0.5 text-xs text-muted-foreground"
                >
                  <TagIcon className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          {item.date && (
            <time dateTime={item.date}>
              {DATE_FMT.format(parseISODate(item.date))}
            </time>
          )}

          {item.readTime && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {item.readTime}
            </span>
          )}
        </div>

        <div className="inline-flex items-center gap-1 text-foreground/80 group-hover:text-foreground">
          <span className="text-sm font-medium">Open</span>
          <ArrowRight className="h-4 w-4 translate-x-0 transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className="block h-full">
      {content}
    </Link>
  );
}
