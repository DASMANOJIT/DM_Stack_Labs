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
            <div
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-2 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"
              role="img"
              aria-label="MSME Verified Business"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path
                    d="M12 3l7 3.6v4.8c0 4.5-2.9 8.7-7 10.6-4.1-1.9-7-6.1-7-10.6V6.6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.8 12.3 2.1 2.1 4.3-4.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>MSME Verified Business</span>
            </div>
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
                <a
                  className="hover:text-slate-950 dark:hover:text-white"
                  href="mailto:dmstacklabs@gmail.com"
                >
                  dmstacklabs@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dmstacklabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit DM Stack Labs on Instagram"
                  className="inline-flex items-center gap-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <rect
                      x="3.5"
                      y="3.5"
                      width="17"
                      height="17"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                  </svg>
                  <span>@dmstacklabs</span>
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
