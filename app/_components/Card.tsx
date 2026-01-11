export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

