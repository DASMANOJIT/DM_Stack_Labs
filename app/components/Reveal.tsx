"use client";

import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "article" | "figure" | "header";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: RevealTag;
};

export default function Reveal({ children, className, as = "div" }: RevealProps) {
  // Keep typing simple and predictable for Next/Turbopack TS runs.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = as;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className ?? ""}`}
    >
      {children}
    </Component>
  );
}
