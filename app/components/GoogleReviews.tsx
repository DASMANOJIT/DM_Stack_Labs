"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MotionTiltCard from "./MotionTiltCard";
import Reveal from "./Reveal";

type Review = {
  authorName: string;
  rating: number;
  text: string;
  profilePhotoUrl: string | null;
  relativeTimeDescription: string;
  time: number;
};

type ReviewsResponse = {
  success: boolean;
  placeName?: string;
  averageRating?: number | null;
  totalRatings?: number | null;
  googleMapsUrl?: string | null;
  reviews: Review[];
  error?: string;
};

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
  const initial = review.authorName.charAt(0).toUpperCase();

  return (
    <MotionTiltCard className="h-full rounded-[28px] [perspective:1200px]" maxTilt={4}>
      <article className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] border border-white/20 bg-white/65 p-5 shadow-[0_22px_50px_-30px_rgba(10,37,64,0.38)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(360px_circle_at_top_left,rgba(30,144,255,0.14),transparent_40%),radial-gradient(320px_circle_at_bottom_right,rgba(0,198,255,0.14),transparent_40%)]" />

        <div className="relative flex h-full flex-col">
          <div className="rounded-[22px] border border-white/20 bg-white/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:bg-white/5">
            <div className="flex items-center gap-3">
              {review.profilePhotoUrl ? (
                <img
                  src={review.profilePhotoUrl}
                  alt={review.authorName}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/60"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] text-sm font-semibold text-white">
                  {initial}
                </div>
              )}

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                  {review.authorName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {review.relativeTimeDescription || "Google review"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <StarRating rating={review.rating} />
              <span className="rounded-full bg-white/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:bg-white/5 dark:text-slate-300">
                Google
              </span>
            </div>
          </div>

          <p className="relative mt-5 line-clamp-7 text-sm leading-6 text-slate-700 dark:text-slate-200">
            &quot;{review.text}&quot;
          </p>
        </div>
      </article>
    </MotionTiltCard>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;

    fetch("/api/google-reviews", { cache: "no-store" })
      .then(async (response) => {
        const payload = (await response.json()) as ReviewsResponse;
        if (isMounted) setData(payload);
      })
      .catch(() => {
        if (isMounted) {
          setData({
            success: false,
            reviews: [],
            error: "Unable to load Google reviews right now.",
          });
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const hasReviews = Boolean(data?.reviews?.length);
  const highlightedReviews = data?.reviews.slice(0, 5) ?? [];
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
          Real Google feedback from founders, teams, and business owners we&apos;ve partnered with
          on websites and digital solutions.
        </p>
      </Reveal>

      {data?.success && (data.averageRating || data.totalRatings) ? (
        <Reveal className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/20 bg-white/70 px-5 py-3 text-center shadow-[0_20px_50px_-28px_rgba(10,37,64,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Google</span>
          {typeof data.averageRating === "number" ? <StarRating rating={data.averageRating} /> : null}
          {typeof data.averageRating === "number" ? (
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              {data.averageRating.toFixed(1)} Excellent
            </p>
          ) : null}
          {typeof data.totalRatings === "number" ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {data.totalRatings}+ reviews
            </p>
          ) : null}
        </Reveal>
      ) : null}

      {data?.success && data.googleMapsUrl ? (
        <Reveal className="mt-5 text-center">
          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300/60 bg-white/70 px-5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            View all on Google
          </a>
        </Reveal>
      ) : null}

      {isLoading ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Reveal
              key={index}
              as="article"
              className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5"
            >
              <div className="h-11 w-11 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="mt-4 h-4 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-3 h-3 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-5 h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-2 h-3 w-11/12 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            </Reveal>
          ))}
        </div>
      ) : hasReviews ? (
        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--brand-bg)] to-transparent dark:from-black lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--brand-bg)] to-transparent dark:from-black lg:hidden" />

          <motion.div
            className="flex gap-4 overflow-x-auto px-1 pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] lg:justify-center lg:overflow-visible"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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
                key={`${review.authorName}-${review.time}-${index}`}
                className={`w-[270px] shrink-0 sm:w-[290px] ${desktopOffsets[index] ?? ""}`}
                variants={{
                  hidden: { opacity: 0, y: 34 },
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
      ) : (
        <Reveal className="mt-10 rounded-3xl border border-white/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-white/5">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
            Reviews will appear here soon
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {data?.error ||
              "Google reviews are temporarily unavailable. Add GOOGLE_API_KEY and GOOGLE_PLACE_ID to load live reviews here."}
          </p>
        </Reveal>
      )}
    </section>
  );
}
