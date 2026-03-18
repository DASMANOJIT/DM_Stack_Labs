"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

type PortfolioCardProps = {
  title: string;
  url: string;
  description: string;
  stack: string[];
  badge?: string;
};

export default function PortfolioCard({ title, url, description, stack, badge }: PortfolioCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadPreview, setShouldLoadPreview] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewLikelyBlocked, setPreviewLikelyBlocked] = useState(false);

  const host = useMemo(() => {
    try {
      return new URL(url).host.replace(/^www\./, "");
    } catch {
      return url;
    }
  }, [url]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadPreview(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoadPreview(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadPreview || previewLoaded) return;

    const timer = window.setTimeout(() => {
      if (!previewLoaded) setPreviewLikelyBlocked(true);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [previewLoaded, shouldLoadPreview]);

  return (
    <Reveal
      as="article"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/60 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5"
    >
      <div className="border-b border-white/10 bg-white/40 px-4 py-3 backdrop-blur dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </span>
            <span className="hidden sm:inline">Preview</span>
          </div>
          <span className="truncate text-xs font-medium text-slate-600 dark:text-slate-300">
            {host}
          </span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[radial-gradient(700px_circle_at_20%_10%,rgba(30,144,255,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(0,198,255,0.16),transparent_55%)]"
      >
        {!shouldLoadPreview ? (
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl border border-white/10 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-200">
              Loading preview…
            </div>
          </div>
        ) : (
          <>
            <iframe
              title={`${title} live preview`}
              src={url}
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-[1.02] bg-white pointer-events-none"
              onLoad={() => setPreviewLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
            {!previewLoaded ? (
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl border border-white/10 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-200">
                  Loading preview…
                </div>
              </div>
            ) : null}
            {previewLikelyBlocked ? (
              <div className="absolute inset-0 grid place-items-center bg-slate-950/10 p-4 backdrop-blur-sm dark:bg-black/30">
                <div className="max-w-sm rounded-3xl border border-white/10 bg-white/70 p-5 text-center shadow-sm backdrop-blur dark:bg-black/40">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    Preview unavailable
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    Some sites block embedded iframes. Open the live site in a new tab.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
                  >
                    Open Live Site
                  </a>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
          {badge ? (
            <span className="inline-flex flex-none items-center rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
              {badge}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:brightness-95"
          >
            Live Link
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/60 px-5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Open in New Tab
          </a>
        </div>

        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Tip: If the embedded preview doesn’t load, use the live link (iframe restrictions).
        </p>
      </div>
    </Reveal>
  );
}

