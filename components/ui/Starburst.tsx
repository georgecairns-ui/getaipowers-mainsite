"use client";

import { motion, useReducedMotion } from "framer-motion";

type StarburstColour = "teal" | "black" | "white" | "red" | "yellow" | "orange";

interface StarburstProps {
  /** Rendered width and height in px. Default 320. */
  size?: number;
  /** Flat single fill colour. Default "teal". */
  colour?: StarburstColour;
  /** Extra classes on the SVG (parent controls opacity/position). */
  className?: string;
  /** Play the scale-and-settle on view. Default true. */
  animate?: boolean;
}

const FILL: Record<StarburstColour, string> = {
  teal: "#00B0BE",
  black: "#000000",
  white: "#FFFFFF",
  // Action red, only ever used inside a comic device (impact burst).
  red: "#E63946",
  // Action yellow and orange, comic impact bursts under the full-comic dial.
  yellow: "#FFC72C",
  orange: "#FF7A2F",
};

/**
 * Abstract sibling of the Get AI Powers emblem: a jagged comic-burst
 * silhouette with irregular spike lengths. It echoes the mark's linework and
 * angles without reproducing the logo. Deterministic geometry, so the shape is
 * identical on every render (no hydration or layout drift).
 */
function buildBurstPath(): string {
  const cx = 100;
  const cy = 100;
  const spikes = 16;
  const outerR = 96;
  // Fixed jitter multipliers give the hand-drawn comic irregularity of the
  // emblem's spikes while staying crisp and repeatable.
  const outerJitter = [
    1.0, 0.85, 0.97, 0.79, 1.0, 0.9, 0.83, 0.98, 0.92, 0.81, 1.0, 0.87, 0.95,
    0.82, 0.99, 0.89,
  ];
  const innerJitter = [
    0.52, 0.45, 0.5, 0.43, 0.51, 0.47, 0.44, 0.5, 0.48, 0.43, 0.52, 0.46, 0.49,
    0.44, 0.5, 0.46,
  ];
  // Point up, with a slight offset so it never reads as mechanical.
  const startAngle = -Math.PI / 2 + 0.08;
  let d = "";
  for (let i = 0; i < spikes; i++) {
    const oa = startAngle + (i / spikes) * Math.PI * 2;
    const ia = oa + Math.PI / spikes;
    const ox = cx + Math.cos(oa) * outerR * outerJitter[i];
    const oy = cy + Math.sin(oa) * outerR * outerJitter[i];
    const ix = cx + Math.cos(ia) * outerR * innerJitter[i];
    const iy = cy + Math.sin(ia) * outerR * innerJitter[i];
    d += `${i === 0 ? "M" : "L"}${ox.toFixed(2)},${oy.toFixed(2)}`;
    d += `L${ix.toFixed(2)},${iy.toFixed(2)}`;
  }
  return `${d}Z`;
}

const BURST_PATH = buildBurstPath();

export default function Starburst({
  size = 320,
  colour = "teal",
  className,
  animate = true,
}: StarburstProps) {
  const prefersReduced = useReducedMotion();

  // Static: render settled, no motion.
  // Reduced motion: a simple opacity fade, no scale.
  // Full: crisp scale-and-settle, no overshoot past 1.
  const initial = !animate
    ? false
    : prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.6 };

  const whileInView = !animate
    ? undefined
    : prefersReduced
      ? { opacity: 1 }
      : { opacity: 1, scale: 1 };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{
        display: "block",
        pointerEvents: "none",
        transformOrigin: "center",
        willChange: animate && !prefersReduced ? "transform, opacity" : undefined,
      }}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: prefersReduced ? 0.3 : 0.62,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <path d={BURST_PATH} fill={FILL[colour]} />
    </motion.svg>
  );
}
