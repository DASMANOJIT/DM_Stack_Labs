"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.email.includes("@") &&
      form.message.trim().length >= 10 &&
      status !== "submitting"
    );
  }, [form.email, form.message, form.name, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Contact — get a quote
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Tell us about your project. We respond within 24 hours with next steps and pricing
          options.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Enquire us !</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            We will be reaching you within 24 hours. We typically respond faster, often within a few hours during the day.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </span>
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(30,144,255,0.25)] dark:border-white/10 dark:bg-black/30 dark:text-white"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Phone
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(30,144,255,0.25)] dark:border-white/10 dark:bg-black/30 dark:text-white"
                  placeholder="+91 9XXXXXXXXX"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
              <input
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                required
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(30,144,255,0.25)] dark:border-white/10 dark:bg-black/30 dark:text-white"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </label>

            <label className="space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                required
                rows={5}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(30,144,255,0.25)] dark:border-white/10 dark:bg-black/30 dark:text-white"
                placeholder="Tell us what you want to build (pages, features, timeline, budget)..."
              />
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-6 text-sm font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" ? (
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Thanks! We received your message.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                {error ?? "Could not submit the form."}
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Contact Info</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Prefer WhatsApp/email? Reach out and we’ll respond quickly.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/60 p-4 dark:bg-white/5">
              <p className="font-semibold text-slate-900 dark:text-white">Email</p>
              <a
                className="mt-1 inline-flex text-slate-700 underline-offset-4 hover:underline dark:text-slate-200"
                href="mailto:dmstacklabs@gmail.com"
              >
                dmstacklabs@gmail.com
              </a>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-white/60 p-4 dark:bg-white/5">
              <p className="font-semibold text-slate-900 dark:text-white">Location</p>
              <p className="mt-1 text-slate-700 dark:text-slate-200">India (Remote-first)</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Keyword note: freelance web developer India, startup website development
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
