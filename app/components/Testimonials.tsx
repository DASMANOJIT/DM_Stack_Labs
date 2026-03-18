import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "DM Stack Labs delivered a fast, SEO-optimized site that started generating leads within the first week.",
    name: "Mr. Subhabrata Datta",
    title: "Founder, SUBHO'S COMPUTER INSTITUTE",
  },
  {
    quote:
      "Great communication, clean code, and a smooth launch. The new website looks modern and loads instantly.",
    name: "Rahul Mehta",
    title: "Owner, Local Services Business",
  },
  {
    quote:
      "They understood our requirements quickly and built a scalable setup we can extend without rework.",
    name: "Neha Kapoor",
    title: "Product Manager, SaaS",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Demo testimonials for now — written to reflect realistic outcomes and expectations.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal
            key={t.name}
            className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5"
            as="figure"
          >
            <blockquote className="text-sm leading-6 text-slate-700 dark:text-slate-200">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">{t.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.title}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

