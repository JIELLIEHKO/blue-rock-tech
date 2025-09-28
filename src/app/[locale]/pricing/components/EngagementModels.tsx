"use client";
import { Check } from "lucide-react";
import { Card } from "./primitives";

export function EngagementModels() {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Fixed‑scope</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          We define scope together, break it into milestones, and quote a fixed price with timeline.
          Great for clearly defined MVPs and PoCs. Change‑requests are priced transparently.
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
    </>
  );
}
