"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const partners = [
  {
    name: "Codiora Academy",
    logo: "/logo1.png",
    url: "https://codiora-academy-zeta.vercel.app/",
    alt: "Codiora Academy logo",
  },
  {
    name: "Subho's Computer Institute",
    logo: "/logo3.png",
    url: "https://subhos.vercel.app/",
    alt: "Subho's Computer Institute logo",
  },
  {
    name: "Flowlytiks",
    logo: "/logo2.png",
    url: "https://flowlytiks-frontend.onrender.com",
    alt: "Flowlytiks logo",
  },
] as const;

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const marqueePartners = [...partners, ...partners];

  return (
    <section
      id="trusted-partners"
      className="theme-dark-locked mx-auto w-full max-w-6xl overflow-hidden rounded-[40px] border border-[color:var(--locked-border)] bg-[var(--locked-bg)] px-4 py-16 shadow-[0_28px_80px_-34px_rgba(10,37,64,0.65)] sm:px-6"
    >
      <div className="relative overflow-hidden rounded-[34px] bg-[var(--locked-bg)] px-6 py-12 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_0%_0%,rgba(30,144,255,0.16),transparent_36%),radial-gradient(720px_circle_at_100%_0%,rgba(0,198,255,0.14),transparent_34%),radial-gradient(640px_circle_at_50%_100%,rgba(255,165,0,0.08),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />

        <Reveal className="relative z-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--locked-muted)]">
            Trusted by Businesses
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--locked-text)] sm:text-4xl">
            Trusted Partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--locked-muted)]">
            Businesses and brands we&apos;ve worked with across Next.js development, business website
            development, and custom web solutions.
          </p>
        </Reveal>

        <Reveal className="relative z-10 mt-12 overflow-hidden rounded-[34px] border border-[color:var(--locked-border)] bg-[var(--locked-panel)] py-8 shadow-[0_24px_60px_-34px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_0%_50%,rgba(30,144,255,0.14),transparent_35%),radial-gradient(800px_circle_at_100%_50%,rgba(0,198,255,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--locked-panel-solid)] via-[rgba(15,24,38,0.90)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--locked-panel-solid)] via-[rgba(15,24,38,0.90)] to-transparent" />

          <motion.div
            className="relative z-10 flex w-max gap-5 px-5 sm:gap-6 sm:px-6"
            animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { ease: "linear", duration: 24, repeat: Number.POSITIVE_INFINITY }
            }
          >
            {marqueePartners.map((partner, index) => (
              <motion.a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="group relative flex h-24 w-[220px] shrink-0 items-center justify-center rounded-[28px] border border-[color:var(--locked-border)] bg-[var(--locked-card)] px-8 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:h-28 sm:w-[260px]"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 280, damping: 20 },
                      }
                }
              >
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(320px_circle_at_50%_0%,rgba(255,255,255,0.16),transparent_55%)] opacity-80" />
                <div className="relative h-14 w-full sm:h-16">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="260px"
                  className="object-contain brightness-110 contrast-110 drop-shadow-[0_14px_30px_rgba(0,0,0,0.4)] transition duration-300 group-hover:brightness-125"
                />
              </div>
            </motion.a>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
