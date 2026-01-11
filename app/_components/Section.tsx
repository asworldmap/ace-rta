export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14 sm:py-14">
      <div className="container-xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
          {subtitle ? (
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
