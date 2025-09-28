'use client';

import { Card, CTAButton } from './primitives';

import {
  Database, Server, Clock, Globe, Wrench, Layers, Rocket,
  ClipboardList, LineChart, Shield, BookOpenText, Bug,
} from 'lucide-react';
import { AddOnData, IconKey } from "@/app/[locale]/pricing/hooks/pricingData";

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  database: Database,
  server: Server,
  clock: Clock,
  globe: Globe,
  wrench: Wrench,
  layers: Layers,
  rocket: Rocket,
  clipboardList: ClipboardList,
  lineChart: LineChart,
  shield: Shield,
  bookOpenText: BookOpenText,
  bug: Bug,
};

export type AddOn = AddOnData;

export function AddOnsGrid({ items }: { items: AddOn[] }) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Popular add-ons</h2>
          <p className="text-zinc-600 dark:text-zinc-300 mt-1">
            Mix & match to your scope. We’ll suggest essentials for MVP.
          </p>
        </div>
        <CTAButton href="/contact">Ask about add-ons</CTAButton>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => {
          const Icon = ICONS[x.iconKey];
          return (
            <Card key={x.title} className="p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-zinc-700 dark:text-zinc-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">{x.title}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{x.desc}</div>
                </div>
                <div className="ms-auto text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {x.price}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
