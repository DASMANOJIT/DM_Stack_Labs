"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#trusted-partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/70 bg-white/88 shadow-[0_16px_40px_-28px_rgba(10,37,64,0.38)] backdrop-blur-xl dark:border-white/10 dark:bg-black/72"
          : "border-transparent bg-white/58 backdrop-blur-md dark:bg-black/34"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
          aria-label="DM Stack Labs home"
        >
          <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:ring-white/10 sm:h-14 sm:w-14">
            <Image
              src="/main.png"
              alt="DM Stack Labs website development company logo"
              width={56}
              height={56}
              className="h-full w-full object-contain p-1"
              priority
            />
          </span>
          <span className="text-base sm:text-lg">
            DM Stack <span className="text-slate-600 dark:text-slate-300">Labs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-gradient-end))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
