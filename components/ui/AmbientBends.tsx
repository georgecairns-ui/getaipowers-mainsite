"use client";

import { useEffect, useState } from "react";
import ColorBends from "@/components/ColorBends";

/**
 * AmbientBends
 *
 * George's site-wide atmosphere: the ColorBends teal light bands sweeping
 * over every page as a fixed, low-opacity, non-interactive layer. Desktop
 * pointer devices only (it is WebGL); mobile, touch and reduced-motion
 * visitors skip it entirely.
 */
export default function AmbientBends() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallOrTouch =
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (!reduced && !smallOrTouch) setOn(true);
  }, []);

  if (!on) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-[0.16]"
    >
      <ColorBends
        rotation={90}
        speed={0.2}
        colors={["#55f7f1", "#24a3e4"]}
        transparent
        autoRotate={0}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.15}
        iterations={1}
        intensity={1.5}
        bandWidth={6}
      />
    </div>
  );
}
