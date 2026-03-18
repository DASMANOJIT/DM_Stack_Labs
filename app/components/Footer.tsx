import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#services", label: "Website Development" },
  { href: "#services", label: "UI/UX Design" },
  { href: "#services", label: "SEO Optimization" },
  { href: "#contact", label: "Maintenance & Support" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/70 backdrop-blur dark:bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:ring-white/10">
                <Image
                  src="/logo.png"
                  alt="DM Stack Labs website development company logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain p-1"
                />
              </span>
              <span>DM Stack Labs</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-600 dark:text-slate-300">
              Affordable, SEO-optimized web design and development services for startups and
              businesses. Fast, modern, and scalable.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <a className="hover:text-slate-950 dark:hover:text-white" href="mailto:dmstacklabs@gmail.com">
                  dmstacklabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DM Stack Labs. All rights reserved.</p>
          <p>Website Development Company • SEO optimized websites • Responsive website design</p>
        </div>
      </div>
    </footer>
  );
}
