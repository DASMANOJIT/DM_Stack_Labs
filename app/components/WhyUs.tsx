import Reveal from "./Reveal";

const points = [
  {
    title: "Fast Delivery",
    desc: "Clear milestones and rapid execution for startups and small businesses.",
  },
  {
    title: "SEO Optimized",
    desc: "Semantic HTML, fast loading, and structured content for visibility.",
  },
  {
    title: "Scalable Solutions",
    desc: "Future-proof architecture that grows with your product and traffic.",
  },
  {
    title: "Affordable Pricing",
    desc: "Flexible packages for small business website development and startups.",
  },
] as const;

export default function WhyUs() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Why choose DM Stack Labs
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A modern website development company focused on trust, performance, and outcomes — not
          fluff.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {points.map((p) => (
          <Reveal
            key={p.title}
            className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5"
            as="article"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,165,0,0.25),rgba(30,144,255,0.12))]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)]" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

