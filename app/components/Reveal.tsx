"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealTag = "div" | "section" | "article" | "figure" | "header";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: RevealTag;
};

export default function Reveal({ children, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const commonProps = {
    className,
    initial: prefersReducedMotion ? false : { opacity: 0, y: 22, filter: "blur(6px)" },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: prefersReducedMotion
      ? undefined
      : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  };

  switch (as) {
    case "section":
      return <motion.section {...commonProps}>{children}</motion.section>;
    case "article":
      return <motion.article {...commonProps}>{children}</motion.article>;
    case "figure":
      return <motion.figure {...commonProps}>{children}</motion.figure>;
    case "header":
      return <motion.header {...commonProps}>{children}</motion.header>;
    default:
      return <motion.div {...commonProps}>{children}</motion.div>;
  }
}
