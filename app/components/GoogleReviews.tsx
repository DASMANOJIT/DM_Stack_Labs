"use client";

import { motion, useReducedMotion } from "framer-motion";
import MotionTiltCard from "./MotionTiltCard";
import Reveal from "./Reveal";

type Review = {
  clientName: string;
  category: string;
  serviceType: string;
  authorName: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    clientName: "Sourabh Jaiswal",
    authorName: "Sourabh Jaiswal",
    category: "EdTech Platform",
    serviceType: "Full-Stack Web App · UI/UX Design",
    rating: 5,
    text: "I was skeptical about learning online, but Codiora Academy's platform genuinely surprised me. Everything is smooth, fast, and easy to navigate — no frustrating lags or confusing layouts. The experience made it so much easier to focus on actually learning. Whoever built this platform clearly understood what students need.",
  },
  {
    clientName: "Aarav Agarwal",
    authorName: "Aarav Agarwal",
    category: "Retail & Health Clinic",
    serviceType: "Business Automation · UI/UX Design",
    rating: 5,
    text: "We needed a POS system tailored to how our clinic actually operates — not a generic off-the-shelf product. DM Stack Labs built exactly that. Fast, intuitive, and reliable at the counter every single day. Worth every rupee.",
  },
  {
    clientName: "Rohan Bhowmick",
    authorName: "Rohan Bhowmick",
    category: "Corporate Client",
    serviceType: "Business Automation · Web App",
    rating: 5,
    text: "Our employee management was a mess before DM Stack Labs stepped in. They built a custom EMS that fits our workflow perfectly — attendance, records, reporting, all in one place. The team was professional, fast, and genuinely understood our business needs.",
  },
  {
    clientName: "Subhabrata Dutta",
    authorName: "Subhabrata Dutta",
    category: "Education Institute",
    serviceType: "Landing Page · UI/UX Design",
    rating: 5,
    text: "We just needed a clean, professional landing page that represented our institute well — and DM Stack Labs delivered beyond expectations. It loads fast, looks great on mobile, and has already brought in new enquiries. Simple process, great result.",
  },
  {
    clientName: "Shanaya Basu",
    authorName: "Shanaya Basu",
    category: "F&B — Cafe & Restaurant",
    serviceType: "Website Development · UI/UX Design",
    rating: 5,
    text: "Our website now feels as good as our cafe. DM Stack Labs captured our vibe perfectly — warm, modern, and inviting. Customers often tell us they visited because of the website. That says it all. Highly recommend them to any business that cares about first impressions.",
  },
];

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className="flex items-center gap-1" aria-label={`${rounded} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rounded;

        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${filled ? "text-amber-500" : "text-slate-300 dark:text-slate-600"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.75l2.87 5.82 6.43.94-4.65 4.53 1.1 6.4L12 17.42 6.25 20.44l1.1-6.4L2.7 9.51l6.43-.94L12 2.75z" />
          </svg>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.authorName
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <MotionTiltCard className="h-full rounded-[28px] [perspective:1200px]" maxTilt={4}>
      <article className="relative h-full min-h-[350px] overflow-hidden rounded-[30px] border border-white/20 bg-white/70 p-5 shadow-[0_24px_60px_-32px_rgba(10,37,64,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_circle_at_top_left,rgba(30,144,255,0.16),transparent_42%),radial-gradient(320px_circle_at_bottom_right,rgba(0,198,255,0.14),transparent_40%),radial-gradient(280px_circle_at_50%_100%,rgba(255,165,0,0.10),transparent_45%)]" />

        <div className="relative flex h-full flex-col">
          <div className="rounded-[24px] border border-white/20 bg-white/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:bg-white/5">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(30,144,255,0.9)]">
                {initials}
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                  {review.clientName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {review.category}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <StarRating rating={review.rating} />
              <span className="rounded-full border border-white/30 bg-white/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {review.serviceType}
              </span>
            </div>
          </div>

          <p className="relative mt-5 flex-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
            &quot;{review.text}&quot;
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-white/10">
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Verified client feedback
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                DM Stack Labs delivery experience
              </p>
            </div>
            <div className="rounded-full bg-[rgba(255,165,0,0.16)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200">
              5/5
            </div>
          </div>
        </div>
      </article>
    </MotionTiltCard>
  );
}

export default function GoogleReviews() {
  const prefersReducedMotion = useReducedMotion();
  const highlightedReviews = reviews;
  const desktopOffsets = [
    "lg:translate-y-8 lg:-rotate-[3deg]",
    "lg:-translate-y-2 lg:rotate-[2deg]",
    "lg:translate-y-5 lg:-rotate-[1deg]",
    "lg:-translate-y-1 lg:rotate-[3deg]",
    "lg:translate-y-7 lg:-rotate-[2deg]",
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Reviews
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
          Businesses trust
          <span className="mt-3 block">
            <span className="inline-flex rounded-2xl bg-[rgba(255,165,0,0.18)] px-4 py-1 text-slate-950 shadow-[0_12px_30px_-20px_rgba(255,165,0,0.8)] dark:text-white">
              how we build online
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Honest feedback from businesses and institutions we&apos;ve worked with on websites,
          full-stack products, landing pages, and business automation systems.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-4xl rounded-[28px] border border-white/20 bg-white/70 px-5 py-5 text-center shadow-[0_20px_50px_-28px_rgba(10,37,64,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Client Rating
            </span>
            <StarRating rating={5} />
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-white/10 sm:block" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold text-slate-950 dark:text-white">5.0 average satisfaction</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Across websites, landing pages, automation systems, and full-stack product work.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[36px]">
          <motion.div
            className="absolute left-[8%] top-[8%] h-40 w-40 rounded-full bg-[rgba(30,144,255,0.12)] blur-3xl"
            animate={
              prefersReducedMotion
                ? undefined
                : { x: [0, 16, 0], y: [0, -12, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
            }
          />
          <motion.div
            className="absolute bottom-[8%] right-[10%] h-36 w-36 rounded-full bg-[rgba(255,165,0,0.10)] blur-3xl"
            animate={
              prefersReducedMotion
                ? undefined
                : { x: [0, -14, 0], y: [0, 10, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
            }
          />
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {highlightedReviews.map((review, index) => (
            <motion.div
              key={`${review.authorName}-${index}`}
              className={desktopOffsets[index] ?? ""}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -4 : 4, 0],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 6 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
