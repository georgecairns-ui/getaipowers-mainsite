"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import type { ElementType, ReactNode } from "react";

type RevealVariant = "fade" | "panel";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Element (or component) the reveal renders as. Defaults to 'div'. */
  as?: ElementType;
  /**
   * "fade" (default) - the original opacity + lift.
   * "panel" - a comic panel snapping into place: lifts 60px, un-tilts from
   * -1.5deg to its resting angle, and its hard offset shadow lands with it.
   */
  variant?: RevealVariant;
  /** Panel variant only: resting angle in degrees the panel settles at. */
  finalRotate?: number;
  /** Panel variant only: colour of the offset shadow that lands. */
  shadowColor?: string;
}

const SETTLE = [0.22, 1, 0.36, 1] as const;

/**
 * ScrollReveal
 *
 * Wraps a section so it reveals the first time it enters the viewport. Under
 * reduced motion it snaps straight to the visible state (duration 0) instead
 * of animating.
 *
 * Both branches render the same motion component: swapping to a plain element
 * after hydration would leave framer's inline `opacity: 0` on the DOM node and
 * the content would stay invisible. The reduced-motion contract is identical
 * for both variants - same component, same final state, duration 0.
 *
 * For the "panel" variant put the panel framing (comic-panel-bold, border, bg)
 * on this component's own className: the landing offset shadow is animated
 * inline and overrides the class shadow, so there is never a double shadow.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "fade",
  finalRotate = 0,
  shadowColor = "#000000",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  // motion.create returns a new component type per call, so memoise it
  // or every parent render remounts the subtree.
  const MotionComponent = useMemo(() => motion.create(as), [as]);

  const isPanel = variant === "panel";

  const initial = isPanel
    ? {
        opacity: 0,
        y: 60,
        rotate: -1.5,
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      }
    : { opacity: 0, y: 24 };

  const target = isPanel
    ? {
        opacity: 1,
        y: 0,
        rotate: finalRotate,
        boxShadow: `6px 6px 0px 0px ${shadowColor}`,
      }
    : { opacity: 1, y: 0 };

  const duration = isPanel ? 0.55 : 0.5;

  if (shouldReduceMotion) {
    return (
      <MotionComponent
        className={className}
        initial={initial}
        animate={target}
        transition={{ duration: 0 }}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, delay, ease: SETTLE }}
    >
      {children}
    </MotionComponent>
  );
}
