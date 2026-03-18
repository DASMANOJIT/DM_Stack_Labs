import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(30,144,255,0.25),rgba(0,198,255,0.18),rgba(255,165,0,0.12))] p-10 shadow-sm backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(700px_circle_at_15%_20%,rgba(30,144,255,0.35),transparent_55%),radial-gradient(700px_circle_at_80%_40%,rgba(0,198,255,0.28),transparent_55%)]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Let’s Build Your Next Project
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-200">
              Get a free consultation and a clear plan for your website development, design, and
              SEO optimization.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand-accent)] px-6 text-sm font-semibold text-slate-950 shadow-sm transition hover:brightness-95"
          >
            Book Free Consultation
          </a>
        </div>
      </Reveal>
    </section>
  );
}

