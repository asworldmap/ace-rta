import Card from "./Card";

export default function Timeline({
  items,
}: {
  items: { month: string; title: string; bullets: string[] }[];
}) {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      {items.map((it, idx) => (
        <Card key={idx}>
          <div className="text-xs uppercase tracking-wide text-white/60">{it.month}</div>
          <div className="mt-2 text-lg font-semibold text-white">{it.title}</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {it.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
