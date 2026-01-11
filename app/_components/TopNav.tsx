import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/proposal", label: "Proposal" },
  { href: "/compliance", label: "Compliance" },
  { href: "/activities", label: "Activities" },
  { href: "/team", label: "Team (Docs)" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071326]/70 backdrop-blur">
      <div className="container-xl flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-24 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/logo_acer-rta.avif"
              alt="ACE-RTA"
              fill
              sizes="96px"
              className="object-contain p-1"
              priority
            />
          </span>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Green Dojo</div>
            <div className="text-xs text-white/60">WKF · by ACE-RTA</div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Internal workspace
          </span>
        </nav>

        {/* Mobile (no client JS) */}
        <details className="md:hidden">
          <summary className="cursor-pointer select-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10">
            ☰ Menu
          </summary>
          <div className="mt-2 w-[260px] rounded-2xl border border-white/10 bg-[#071326]/95 p-2 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
