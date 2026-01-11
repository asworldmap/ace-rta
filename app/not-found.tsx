export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm opacity-70">Green Dojo · Internal workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 opacity-80">
          The page you’re looking for doesn’t exist (or has been moved).
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="/"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15 border border-white/10"
          >
            Go Home
          </a>
          <a
            href="/proposal"
            className="rounded-xl bg-[#2B6CFF]/90 px-4 py-2 text-sm hover:bg-[#2B6CFF] text-white"
          >
            Proposal
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 opacity-80">
          <img src="/logo_acer-rta.avif" alt="ACE-RTA" className="h-10 w-auto" />
          <div className="text-xs">
            <div className="font-medium">ACE-RTA</div>
            <div className="opacity-70">Regenerating through Action</div>
          </div>
        </div>
      </div>
    </main>
  );
}
