'use client';
import { ClipboardList, BadgeDollarSign, Rocket, Wrench, Shield, BookOpenText } from 'lucide-react';
import { Card } from './primitives';

function StepCard({ icon, title, time, children }: React.PropsWithChildren<{ icon: React.ReactNode; title: string; time: string }>) {
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

export function ProcessSection() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">Process & typical timeline</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StepCard icon={<ClipboardList className="h-5 w-5" />} title="1) Discovery" time="1–2 days">
          Share goals, constraints, and integrations. We map scope, risks, and acceptance.
        </StepCard>
        <StepCard icon={<BadgeDollarSign className="h-5 w-5" />} title="2) Proposal & quote" time="1–3 days">
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
    </div>
  );
}