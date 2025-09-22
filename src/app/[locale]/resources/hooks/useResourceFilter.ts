'use client';
import { useMemo, useState } from 'react';
import type { ResourceItem } from '../types';
import { TYPES } from '../constants';


export function useResourceFilter(items: ResourceItem[]) {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState<(typeof TYPES)[number]>('All');


  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((r) => {
        const typeOk = activeType === 'All' ? true : r.type === activeType;
        const text = `${r.title} ${r.description} ${(r.tags || []).join(' ')}`.toLowerCase();
        const match = q ? text.includes(q) : true;
        return typeOk && match;
      })
      .sort((a, b) => Number(new Date(b.date || 0)) - Number(new Date(a.date || 0)));
  }, [query, activeType, items]);


  const featured = filtered.filter((r) => r.featured);
  const rest = filtered.filter((r) => !r.featured);


  return { query, setQuery, activeType, setActiveType, filtered, featured, rest } as const;
}