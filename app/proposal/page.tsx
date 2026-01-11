import { project } from "../_data/green-dojo";

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 text-sm opacity-80">{children}</div>
    </div>
  );
}

export default function Proposal() {
  return (
    <section className="fade-up space-y-10">
      <div>
        <div className="badge">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
          Proposal workspace
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Green Dojo · Proposal</h1>
        <p className="mt-3 max-w-3xl opacity-75">
          Esta página es para alinear narrativa + estructura. No es marketing: es claridad para tomar decisiones.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {project.pillars.map((p) => (
          <div key={p.title} className="glass rounded-2xl p-5 hover:bg-white/5 transition-colors">
            <div className="text-sm font-semibold">{p.title}</div>
            <div className="mt-2 text-sm opacity-75">{p.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {project.lumpsum.map((pkg) => (
          <div key={pkg.title} className="glass rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{pkg.title}</h2>
              <span className="badge">lump sum</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {pkg.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 opacity-70">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Box title="What makes it strong">
          Evaluator-friendly logic: needs → objectives → activities → outputs → outcomes → legacy.
        </Box>
        <Box title="Proof & evidence">
          Measurement plan + documentation framework to avoid “nice words, no proof”.
        </Box>
        <Box title="Replication">
          Designed to scale beyond pilots (transferability + dissemination assets).
        </Box>
      </div>
    </section>
  );
}
