import TopNav from "../_components/TopNav";

export default function Legal() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <TopNav />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Legal (internal)</h1>
        <p className="mt-3 opacity-80">
          Placeholder. This site is internal and not intended for public use.
        </p>
      </section>
    </main>
  );
}
