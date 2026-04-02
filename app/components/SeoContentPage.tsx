import Link from "next/link";
import MarketingShell from "./MarketingShell";

type LinkItem = {
  href: string;
  label: string;
};

type SeoContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  offerItems: string[];
  audienceItems: string[];
  benefits: string[];
  relatedLinks: LinkItem[];
  ctaTitle: string;
  ctaDescription: string;
};

function ListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[var(--brand-blue)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SeoContentPage({
  eyebrow,
  title,
  intro,
  offerItems,
  audienceItems,
  benefits,
  relatedLinks,
  ctaTitle,
  ctaDescription,
}: SeoContentPageProps) {
  return (
    <MarketingShell>
      <article className="mx-auto w-full max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
        <header className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Book a Consultation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Get a Quote
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ListSection title="What we offer" items={offerItems} />
          <ListSection title="Who this is for" items={audienceItems} />
          <ListSection title="Benefits" items={benefits} />
        </div>

        <section className="mt-10 rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Related pages
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Explore the most relevant service and industry pages to understand how we plan,
            build, and scale conversion-focused digital products for businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[32px] border border-[var(--brand-blue)]/20 bg-[linear-gradient(135deg,rgba(30,144,255,0.10),rgba(0,198,255,0.08))] p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {ctaTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{ctaDescription}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services/website-development"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </section>
      </article>
    </MarketingShell>
  );
}
