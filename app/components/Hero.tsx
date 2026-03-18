import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(30,144,255,0.25),transparent_50%),radial-gradient(900px_circle_at_80%_20%,rgba(0,198,255,0.25),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(255,165,0,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(2,6,23,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.08)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-20 dark:[background-image:linear-gradient(to_right,rgba(226,232,240,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.10)_1px,transparent_1px)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-200">
              Fast-loading websites • Modern UI • SEO-ready
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Build Fast. Scale Smart. Grow Digital.
              <span className="mt-3 block text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl">
                DM Stack Labs — a website development company for startups and businesses
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              We provide web development services and build high-performance, responsive website
              design with{" "}
              <span className="font-medium text-slate-800 dark:text-slate-100">
                custom website development
              </span>{" "}
              that converts visitors into customers — with SEO optimized websites and scalable
              architecture.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                { k: "Fast Delivery", v: "1–2 weeks MVP" },
                { k: "SEO Optimized", v: "Clean, semantic HTML" },
                { k: "Mobile-First", v: "Responsive by default" },
                { k: "Tech Stack", v: "Next.js • React" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/10 bg-white/60 px-4 py-3 shadow-sm backdrop-blur dark:bg-white/5"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{item.k}</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{item.v}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs font-medium text-slate-500 dark:text-slate-400">
              Trusted by 50+ clients • Web development services • Affordable website development
            </p>
          </Reveal>

          <Reveal className="lg:justify-self-end">
            <div className="relative rounded-3xl border border-white/10 bg-white/60 p-6 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.45)] backdrop-blur dark:bg-white/5">
              <div className="absolute -inset-px rounded-3xl bg-[linear-gradient(135deg,rgba(30,144,255,0.35),rgba(0,198,255,0.20),rgba(255,165,0,0.12))] opacity-60 blur-2xl" />
              <div className="relative rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  What you get
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/90">
                  {[
                    "Modern landing pages and websites that convert",
                    "Fast loading website development (Core Web Vitals friendly)",
                    "SEO + analytics-ready setup",
                    "Maintenance & support after launch",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">Quick Quote</p>
                  <p className="mt-1 text-xs text-white/70">
                    Share your requirements and we’ll reply within 24 hours.
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                  >
                    Get a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
