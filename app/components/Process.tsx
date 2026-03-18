import Reveal from "./Reveal";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We understand goals, audience, and the exact deliverables.",
  },
  {
    title: "Design",
    desc: "UI/UX design and content structure aligned to your brand.",
  },
  {
    title: "Development",
    desc: "Fast loading website development with clean, scalable code.",
  },
  {
    title: "Testing",
    desc: "Performance, responsiveness, and cross-browser checks.",
  },
  {
    title: "Launch",
    desc: "Deploy, monitor, and handover with optional maintenance & support.",
  },
] as const;

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          A simple process that reduces risk
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Clarity builds confidence. Our step-by-step flow keeps your project on track and removes
          hesitation.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {steps.map((s, idx) => (
          <Reveal
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5"
            as="article"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Step {idx + 1}
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-950 dark:text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

