import Card from "./Card";

export default function Roadmap({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {steps.map((s, i) => (
        <Card key={i}>
          <div className="text-xs uppercase tracking-wide text-white/60">Step {i + 1}</div>
          <div className="mt-2 text-xl font-semibold text-white">{s.title}</div>
          <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
        </Card>
      ))}
    </div>
  );
}
