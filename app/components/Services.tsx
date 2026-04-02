import Reveal from "./Reveal";

const services = [
  {
    title: "Website Development",
    desc: "Custom website development that’s fast, secure, and scalable.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 9h8M8 13h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Modern website design company aesthetics with conversion-focused UX.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M4 6h16M8 6v14m-4 0h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 11h6v6h-6z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    desc: "SEO optimized websites with clean, semantic HTML and speed-first builds.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M4 19V5m0 14h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 15l4-5 4 3 5-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Tech Solutions",
    desc: "APIs, dashboards, and integrations tailored to your business workflows.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M7 7h10v10H7z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 12h3m10 0h3M12 4v3m0 10v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable updates, fixes, and improvements after launch.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19.4 15a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2-1.5-2-3.5-2.4.6a8 8 0 0 0-1.7-1l-.4-2.4h-4l-.4 2.4a8 8 0 0 0-1.7 1l-2.4-.6-2 3.5 2 1.5a7.9 7.9 0 0 0-.1 1c0 .3 0 .7.1 1l-2 1.5 2 3.5 2.4-.6c.5.4 1.1.7 1.7 1l.4 2.4h4l.4-2.4c.6-.3 1.2-.6 1.7-1l2.4.6 2-3.5-2-1.5Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Web development services that grow revenue
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          From affordable web development packages to premium builds — we craft responsive website
          design with performance and SEO built in. See our{" "}
          <a
            className="font-semibold text-slate-900 underline underline-offset-4 hover:opacity-90 dark:text-white"
            href="#trusted-partners"
          >
            trusted partners
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-slate-900 underline underline-offset-4 hover:opacity-90 dark:text-white"
            href="#contact"
          >
            get a free consultation
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Reveal
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5"
            as="article"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(30,144,255,0.22),rgba(0,198,255,0.12))] text-[var(--brand-blue)] dark:text-white">
              {s.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
