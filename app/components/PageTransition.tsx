"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
