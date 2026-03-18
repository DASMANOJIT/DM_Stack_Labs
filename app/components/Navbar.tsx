import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur dark:bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
          aria-label="DM Stack Labs home"
        >
          <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:ring-white/10 sm:h-14 sm:w-14">
            <Image
              src="/logo.png"
              alt="DM Stack Labs website development company logo"
              width={56}
              height={56}
              className="h-full w-full object-contain p-1"
              priority
            />
          </span>
          <span className="text-base sm:text-lg">
            DM Stack <span className="text-slate-600 dark:text-slate-300">Labs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
