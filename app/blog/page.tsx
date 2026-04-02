import Link from "next/link";
import type { Metadata } from "next";
import MarketingShell from "../components/MarketingShell";
import { createPageMetadata } from "../lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Business Website and SaaS Insights | DM Stack Labs",
  description:
    "Explore practical insights for business owners evaluating website development, SaaS product builds, automation tools, and digital growth decisions.",
  path: "/blog",
  keywords: [
    "business website insights",
    "SaaS development insights",
    "website development for businesses",
  ],
});

const topics = [
  {
    title: "Website Cost for Coaching Institutes in India",
    description:
      "What business owners should budget for if they want a modern admissions-focused website.",
    href: "/industries/coaching-institute-websites",
  },
  {
    title: "Next.js vs Traditional CMS for Business Websites",
    description:
      "How to choose a stack based on speed, maintainability, and conversion needs.",
    href: "/services/website-development",
  },
  {
    title: "When Your Business Needs a Custom Web Application",
    description:
      "Signals that spreadsheets and disconnected tools are slowing your team down.",
    href: "/services/full-stack-web-app-development",
  },
  {
    title: "How Automation Tools Save Time for Small Businesses",
    description:
      "A practical view of where workflow automation creates real business value.",
    href: "/services/business-automation-tools",
  },
];

export default function BlogPage() {
  return (
    <MarketingShell>
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Business-focused insights on websites, SaaS, and automation
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            This section is designed for business owners comparing service options, planning digital
            investments, and evaluating what to build next. Every topic connects back to a practical
            service page instead of tutorial-style content.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {topic.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {topic.description}
              </p>
              <Link
                href={topic.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--brand-blue)] hover:opacity-90"
              >
                Explore related service
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
