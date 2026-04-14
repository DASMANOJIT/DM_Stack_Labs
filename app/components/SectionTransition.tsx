"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function SectionTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.18,
    margin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={sectionRef}
      className={className}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity, filter",
            }
      }
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? "visible" : isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: 56,
          rotateX: 10,
          scale: 0.982,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 0.82,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}
