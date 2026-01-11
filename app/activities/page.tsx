import { activitiesSeed } from "../_data/green-dojo";

export default function Activities() {
  return (
    <section className="fade-up space-y-10">
      <div>
        <div className="badge">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
          Work plan
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Plan de trabajo</h1>
        <p className="mt-3 max-w-3xl opacity-75">
          Tabla operativa (editable) con fases, responsables y outputs. Ideal para reuniones rápidas.
        </p>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/10">
              <tr className="text-xs uppercase tracking-wide opacity-70">
                <th className="px-5 py-4">Phase</th>
                <th className="px-5 py-4">Track</th>
                <th className="px-5 py-4">Activity</th>
                <th className="px-5 py-4">Output</th>
                <th className="px-5 py-4">Owner</th>
              </tr>
            </thead>
            <tbody>
              {activitiesSeed.map((a, idx) => (
                <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="badge">{a.phase}</span>
                  </td>
                  <td className="px-5 py-4">{a.track}</td>
                  <td className="px-5 py-4 min-w-[260px]">{a.activity}</td>
                  <td className="px-5 py-4 min-w-[240px] opacity-80">{a.output}</td>
                  <td className="px-5 py-4 whitespace-nowrap opacity-80">{a.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="text-sm font-semibold">Next step</div>
        <p className="mt-2 text-sm opacity-75">
          Me pasas países/partners confirmados + duración (meses) y te lo convierto en timeline real con milestones por deliverable.
        </p>
      </div>
    </section>
  );
}
