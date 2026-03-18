import Reveal from "./Reveal";

type CTAInlineProps = {
  title: string;
  description: string;
  primaryText?: string;
};

export default function CTAInline({
  title,
  description,
  primaryText = "Get Free Consultation",
}: CTAInlineProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <Reveal className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <a
          href="#contact"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:brightness-95"
        >
          {primaryText}
        </a>
      </Reveal>
    </section>
  );
}

