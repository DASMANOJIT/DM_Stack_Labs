import Reveal from "./Reveal";
import PortfolioCard from "./PortfolioCard";

const clientAndProductProjects = [
  {
    title: "Codiora Academy",
    url: "https://codiora-academy-zeta.vercel.app/",
    description:
      "A high-conversion landing page for Codiora Academy built using Next.js and Tailwind CSS. It includes an automated lead generation system powered by Prisma ORM and integrates WhatsApp Business API for instant student inquiries and enrollment tracking.",
    stack: ["Next.js", "Tailwind CSS", "Prisma", "WhatsApp Business API"],
  },
  {
    title: "Subho's Computer Institute",
    url: "https://subhos.vercel.app/",
    description:
      "An SEO-optimized React-based website for Subho's Computer Institute (Kolkata), designed to promote ICSE, ISC, and CBSE computer coaching along with Python programming courses.",
    stack: ["React", "SEO", "Responsive UI"],
  },
  {
    title: "Flowlytiks",
    url: "https://flowlytiks-frontend.onrender.com",
    badge: "Work in Progress (WIP)",
    description:
      "Flowlytiks is a SaaS-based analytics and workflow platform currently under active development (Work In Progress). It focuses on structured user onboarding, lead management, and data-driven insights for digital businesses. Built using Next.js and Prisma, the platform is being designed with scalable architecture and automation-first workflows.",
    stack: ["Next.js", "Prisma", "SaaS", "Automation-first"],
  },
] as const;

const creativeProjects = [
  {
    title: "Digital Event & Proposal Pages",
    url: "https://valentine-umber-rho.vercel.app/",
    description:
      "Custom-designed interactive digital experiences including cute proposals, birthday and anniversary wishes, and wedding/event invitation pages. These are lightweight, visually engaging, and highly personalized web-based cards.",
    stack: ["Next.js", "Tailwind CSS", "Interactive UI"],
  },
] as const;

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Portfolio — real projects
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Explore our website development projects with live previews. If an embedded preview is
          blocked, open the project in a new tab.
        </p>
      </Reveal>

      <div className="mt-10">
        <Reveal as="header">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
            Client & Product Projects
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Landing pages, SEO sites, and platforms built with modern stacks.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientAndProductProjects.map((p) => (
            <PortfolioCard
              key={p.title}
              title={p.title}
              url={p.url}
              description={p.description}
              stack={[...p.stack]}
              badge={"badge" in p ? p.badge : undefined}
            />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <Reveal as="header">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Creative Projects</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Lightweight, interactive digital experiences and event pages.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creativeProjects.map((p) => (
            <PortfolioCard
              key={p.title}
              title={p.title}
              url={p.url}
              description={p.description}
              stack={[...p.stack]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
