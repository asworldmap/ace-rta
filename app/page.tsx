import Link from "next/link";
import Section from "./_components/Section";
import Card from "./_components/Card";
import Roadmap from "./_components/Roadmap";
import Timeline from "./_components/Timeline";
import { greenDojo } from "./_content/greenDojo";

import {
  Leaf,
  Target,
  ClipboardCheck,
  Rocket,
  Users,
  Calendar,
  Map,
  ShieldCheck,
  FileText,
  BarChart3,
  Milestone,
} from "lucide-react";

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-white/10 flex items-center justify-center">
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
    {children}
  </span>
);

export default function HomePage() {
  // 🔥 Contenido “one-pager” (puedes moverlo luego a _content si quieres)
  const requirements = [
    {
      icon: <Target className="h-5 w-5 text-white" />,
      title: "Clear objectives & scope",
      desc: "One programme, one logic model, and a scope that fits the call.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-white" />,
      title: "Measurable ESG impact",
      desc: "KPIs that can be reported: baseline → pilots → verified results.",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-white" />,
      title: "Quality & governance",
      desc: "Work plan, owners, risk control, and decision traceability.",
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: "Capacity & dissemination",
      desc: "Partners + toolkit + training + replication path for clubs.",
    },
  ];

  const solutionBlocks = [
    {
      icon: <Leaf className="h-5 w-5 text-white" />,
      title: "Club Sustainability Toolkit",
      desc: "Practical actions: waste, mobility, events, procurement, energy, communication.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-white" />,
      title: "Compliance & Evidence Pack",
      desc: "Templates + checklists + annex logic so reviewers can tick fast.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-white" />,
      title: "Pilots (real clubs, real data)",
      desc: "Test the toolkit in clubs and produce validated reporting evidence.",
    },
    {
      icon: <FileText className="h-5 w-5 text-white" />,
      title: "Reporting-ready deliverables",
      desc: "Outputs designed to match monitoring moments and final reporting.",
    },
    {
      icon: <Map className="h-5 w-5 text-white" />,
      title: "Scale plan",
      desc: "Replication guide + training model + dissemination assets for federations.",
    },
  ];

  const kpis = [
    { title: "Adoption", desc: "Clubs onboarded, tool usage, completion rate by module." },
    { title: "Footprint", desc: "Selected indicators (waste / mobility / events) pre vs post." },
    { title: "Training", desc: "Participants trained, satisfaction, competence gain evidence." },
    { title: "Replication", desc: "Clubs replicating after pilots + materials reused." },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="py-14 sm:py-14">
        <div className="container-xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl bg-blue-500/20 -z-10" />
            <div className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full blur-3xl bg-cyan-400/10 -z-10" />

            <div className="flex flex-wrap items-center gap-2">
              <div className="text-xs uppercase tracking-wide text-white/60">{greenDojo.name}</div>
              <span className="text-white/40">·</span>
              <Pill>WKF proposal workspace</Pill>
              <Pill>ESG impact</Pill>
              <Pill>Evidence-first</Pill>
            </div>

            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">
              {greenDojo.tagline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
              {greenDojo.oneLiner}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={greenDojo.cta.primary.href}
                className="inline-flex items-center justify-center rounded-xl bg-[#2B6CFF]/90 px-5 py-3 font-semibold text-white hover:opacity-95 transition"
              >
                {greenDojo.cta.primary.label}
              </Link>
              <Link
                href={greenDojo.cta.secondary.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                {greenDojo.cta.secondary.label}
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Team area
              </Link>
            </div>

            {/* Quick “at a glance” cards */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card>
                <div className="flex items-start gap-3">
                  <IconWrap><Leaf className="h-5 w-5 text-white" /></IconWrap>
                  <div>
                    <div className="font-semibold text-white">What it is</div>
                    <p className="text-sm text-white/70 mt-1">
                      A structured sustainability programme for karate clubs, designed for funding and reporting.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <IconWrap><Rocket className="h-5 w-5 text-white" /></IconWrap>
                  <div>
                    <div className="font-semibold text-white">What we produce</div>
                    <p className="text-sm text-white/70 mt-1">
                      Toolkit + training + pilots + evidence pack + scale plan.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <IconWrap><ClipboardCheck className="h-5 w-5 text-white" /></IconWrap>
                  <div>
                    <div className="font-semibold text-white">How it wins</div>
                    <p className="text-sm text-white/70 mt-1">
                      Everything maps to requirements: impact, quality, capacity, dissemination.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* THE CALL (in plain language) */}
      <Section
        title="What the call really asks for"
        subtitle="Translated into requirements reviewers can score — and how we answer them."
      >
        <div className="grid lg:grid-cols-2 gap-4">
          {requirements.map((r) => (
            <Card key={r.title}>
              <div className="flex items-start gap-3">
                <IconWrap>{r.icon}</IconWrap>
                <div>
                  <div className="font-semibold text-white">{r.title}</div>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-4">
          <Card>
            <div className="flex items-center gap-3">
              <IconWrap><Calendar className="h-5 w-5 text-white" /></IconWrap>
              <div>
                <div className="text-white font-semibold">Call framing (short)</div>
                <p className="text-sm text-white/70 mt-1">
                  A WKF-facing programme proposal with measurable sustainability outcomes and a repeatable model for clubs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* THE SOLUTION */}
      <Section
        title="Green Dojo, in one page"
        subtitle="The programme structure: what exists, what gets tested, and what gets delivered."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutionBlocks.map((b) => (
            <Card key={b.title}>
              <div className="flex items-start gap-3">
                <IconWrap>{b.icon}</IconWrap>
                <div>
                  <div className="font-semibold text-white">{b.title}</div>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* KPIs / EVIDENCE */}
      <Section
        title="Evidence model (what we will prove)"
        subtitle="We don’t promise vibes. We promise KPIs we can show in reporting."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Card key={k.title}>
              <div className="flex items-center gap-3">
                <IconWrap><Milestone className="h-5 w-5 text-white" /></IconWrap>
                <div className="font-semibold text-white">{k.title}</div>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{k.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ROADMAP */}
      <Section title="Roadmap" subtitle="A simple logic: requirements → design → pilots → evidence → scale.">
        <Roadmap steps={greenDojo.roadmapSteps} />
      </Section>

      {/* TIMELINE */}
      <Section title="Timeline" subtitle="Clear phases with deliverables that match reporting moments.">
        <Timeline items={greenDojo.timeline} />
      </Section>

      {/* DELIVERABLES + CTA */}
      <Section
        title="Deliverables (reviewer checklist)"
        subtitle="Concrete outputs. Easy to evaluate. Easy to report."
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <ul className="space-y-3 text-sm text-white/80">
              {greenDojo.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-500/70" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="text-white font-semibold">Next actions (zero drama)</div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Lock the narrative and KPIs first. Then owners + work plan. Then pilots + evidence. Then scale pack.
            </p>

            <div className="mt-4 flex gap-3 flex-wrap">
              <Link
                href="/proposal"
                className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Proposal structure
              </Link>
              <Link
                href="/compliance"
                className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Compliance checklist
              </Link>
              <Link
                href="/team"
                className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Team area
              </Link>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-white/60">Principle</div>
              <div className="text-sm text-white/80 mt-1">
                If we can’t evidence it, we don’t claim it.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <div className="container-xl">
        <hr className="hr-soft" />
        <div className="py-10 text-sm text-white/55">
          Green Dojo · Proposal workspace
        </div>
      </div>
    </main>
  );
}
