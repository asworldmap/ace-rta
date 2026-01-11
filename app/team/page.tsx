import Card from "../_components/Card";
import { Users, ClipboardCheck, Calendar, FileText, ShieldCheck, Milestone } from "lucide-react";

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-white/10 flex items-center justify-center">
    {children}
  </div>
);

const links = [
  { title: "Documents", desc: "Shared repository: evidence, annexes, templates, minutes.", href: "/team/docs/", tag: "Docs" },
  { title: "Templates", desc: "Checklists, KPIs, tables, reporting-ready formats.", href: "/team/docs/templates/", tag: "Templates" },
  { title: "Minutes", desc: "Decisions, owners, meeting outcomes and commitments.", href: "/team/docs/minutes/", tag: "Governance" },
  { title: "Private", desc: "Sensitive or internal-only materials.", href: "/team/docs/private/", tag: "Restricted" },
];

const roles = [
  { title: "Proposal lead", desc: "Owns narrative coherence and submission readiness." },
  { title: "Impact & KPIs", desc: "Defines baselines, indicators, and evidence plan." },
  { title: "Work plan & budget", desc: "Turns narrative into tasks, timeline, resources." },
  { title: "Dissemination", desc: "Comms plan, assets, replication strategy for clubs." },
];

const cadence = [
  { title: "Weekly sync", desc: "30–45 min. Decisions only. No essays." },
  { title: "Writing sprint", desc: "One section per sprint. Freeze after review." },
  { title: "Evidence day", desc: "Collect proofs, annexes, letters, pilots data." },
];

export default function Team() {
  return (
    <main className="container-xl py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_20%_0%,rgba(43,108,255,.18),transparent_55%),radial-gradient(800px_520px_at_90%_20%,rgba(38,215,255,.12),transparent_55%)]" />

        <p className="text-sm text-white/60">Team area (protected)</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Mission Control</h1>
        <p className="mt-4 max-w-3xl text-white/75">
          This is where we keep the work clean: owners, decisions, evidence and deliverables — so the proposal stays coherent and submission-ready.
        </p>

        {/* QUICK LINKS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map((s) => (
            <a key={s.title} href={s.href} className="block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-semibold text-white">{s.title}</h2>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/75">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                  Open →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* HOW WE WORK */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <IconWrap><ClipboardCheck className="h-5 w-5 text-white" /></IconWrap>
              <div>
                <div className="text-white font-semibold">Working rules (keep it sharp)</div>
                <p className="text-sm text-white/70 mt-1">
                  We optimise for reviewer clarity: every claim must map to an output, a KPI, or a piece of evidence.
                </p>
              </div>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                <span className="text-white/60">Rule #1:</span> no evidence → no claim
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                <span className="text-white/60">Rule #2:</span> one owner per deliverable
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                <span className="text-white/60">Rule #3:</span> decisions logged, always
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <IconWrap><FileText className="h-5 w-5 text-white" /></IconWrap>
                <div className="text-white font-semibold">Decision log (format)</div>
              </div>
              <p className="mt-3 text-sm text-white/75">
                Whenever we decide something, we write: <b>Decision</b> · <b>Owner</b> · <b>Deadline</b> · <b>Evidence</b>.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <IconWrap><Calendar className="h-5 w-5 text-white" /></IconWrap>
              <div className="text-white font-semibold">Cadence</div>
            </div>

            <div className="mt-4 space-y-3">
              {cadence.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-sm font-semibold text-white">{c.title}</div>
                  <div className="text-sm text-white/70 mt-1">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-3">
                <IconWrap><ShieldCheck className="h-5 w-5 text-white" /></IconWrap>
                <div>
                  <div className="text-sm font-semibold text-white">Access</div>
                  <p className="text-sm text-white/70 mt-1">Protected area for internal coordination.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ROLES */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <IconWrap><Users className="h-5 w-5 text-white" /></IconWrap>
            <h3 className="text-base font-semibold text-white">Roles (assign owners)</h3>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {roles.map((r) => (
              <div key={r.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="text-sm font-semibold text-white">{r.title}</div>
                <div className="text-sm text-white/70 mt-1">{r.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-3">
              <IconWrap><Milestone className="h-5 w-5 text-white" /></IconWrap>
              <div>
                <div className="text-sm font-semibold text-white">Goal</div>
                <div className="text-sm text-white/70 mt-1">
                  Submission-ready proposal: clean narrative, measurable KPIs, pilots plan, annexes ready.
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
