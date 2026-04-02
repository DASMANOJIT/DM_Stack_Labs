"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type MotionTiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function MotionTiltCard({
  children,
  className,
  maxTilt = 7,
}: MotionTiltCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 180, damping: 18, mass: 0.7 });
  const rotateY = useSpring(rotateYValue, { stiffness: 180, damping: 18, mass: 0.7 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const xPercent = x / bounds.width - 0.5;
    const yPercent = y / bounds.height - 0.5;

    rotateXValue.set(-yPercent * maxTilt);
    rotateYValue.set(xPercent * maxTilt);
  }

  function handleMouseLeave() {
    rotateXValue.set(0);
    rotateYValue.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -8,
              scale: 1.015,
              transition: { type: "spring", stiffness: 220, damping: 18 },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

