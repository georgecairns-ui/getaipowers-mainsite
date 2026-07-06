"use client";

import { useEffect, useState } from "react";
import DotField from "@/components/DotField";

/**
 * InteractiveHalftone
 *
 * The comic halftone field, alive: a canvas dot-grid (React Bits DotField)
 * in brand teal that bulges and glows around the cursor. Falls back to the
 * static CSS halftone for reduced motion, touch devices and small screens,
 * where a cursor-driven canvas is dead weight.
 *
 * Fill-parent: position the parent relative; this renders absolutely inset-0.
 */
export default function InteractiveHalftone({
  className = "",
}: {
  className?: string;
}) {
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallOrTouch =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (!reduced && !smallOrTouch) setInteractive(true);
  }, []);

  if (!interactive) {
    return (
      <div
        aria-hidden="true"
        className={`halftone-teal-strong pointer-events-none absolute inset-0 ${className}`}
      />
    );
  }

  return (
    <div aria-hidden="true" className={`absolute inset-0 ${className}`}>
      <DotField
        dotRadius={2}
        dotSpacing={12}
        cursorRadius={340}
        cursorForce={0.12}
        bulgeOnly={true}
        bulgeStrength={52}
        glowRadius={140}
        sparkle={false}
        waveAmplitude={0}
        gradientFrom="rgba(0, 176, 190, 0.5)"
        gradientTo="rgba(0, 176, 190, 0.22)"
        glowColor="#00B0BE"
      />
    </div>
  );
}
