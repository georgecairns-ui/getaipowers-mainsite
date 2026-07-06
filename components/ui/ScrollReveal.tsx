"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import type { ElementType, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Element (or component) the reveal renders as. Defaults to 'div'. */
  as?: ElementType;
}

/**
 * ScrollReveal
 *
 * Wraps a section so it fades and lifts into view the first time it
 * enters the viewport. Under reduced motion it snaps straight to the
 * visible state (duration 0) instead of animating.
 *
 * Both branches render the same motion component: swapping to a plain
 * element after hydration would leave framer's inline `opacity: 0` on
 * the DOM node and the content would stay invisible.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  // motion.create returns a new component type per call, so memoise it
  // or every parent render remounts the subtree.
  const MotionComponent = useMemo(() => motion.create(as), [as]);

  if (shouldReduceMotion) {
    return (
      <MotionComponent
        className={className}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
