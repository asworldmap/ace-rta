const checklist = [
  {
    title: "Fit & eligibility",
    items: [
      "Call objectives and priorities mapped (why this fits).",
      "Partner roles and eligibility confirmed (who does what).",
      "Work plan feasibility (timeline + owners + outputs).",
    ],
  },
  {
    title: "Quality & governance",
    items: [
      "ISO-style cycle (Plan-Do-Check-Act) translated into project delivery.",
      "Risk management + mitigation documented.",
      "Evidence plan (what we will show, not what we will claim).",
    ],
  },
  {
    title: "Impact & legacy",
    items: [
      "KPIs defined (carbon / water / energy / stakeholder).",
      "Replication & transferability explained.",
      "Dissemination assets planned (toolkits, guidelines, templates).",
    ],
  },
  {
    title: "Budget coherence",
    items: [
      "Deliverables justify the selected lump sum package.",
      "Reporting obligations covered by outputs.",
      "Resources match scope (no overpromises).",
    ],
  },
];

export default function Compliance() {
  return (
    <section className="fade-up space-y-10">
      <div>
        <div className="badge">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--cyan)" }} />
          Compliance view
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Convocatoria · Checklist</h1>
        <p className="mt-3 max-w-3xl opacity-75">
          Checklist interno para asegurar que Green Dojo es sólido en evaluación: compliance, calidad, impacto y coherencia.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {checklist.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">{g.title}</h2>
              <span className="badge">internal</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {g.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 opacity-70">☐</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="text-sm font-semibold">Note</div>
        <p className="mt-2 text-sm opacity-75">
          Cuando me pegues el texto exacto de la convocatoria / guía WKF, convierto esto en checklist con wording literal (y evidencias por item).
        </p>
      </div>
    </section>
  );
}
