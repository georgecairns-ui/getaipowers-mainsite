"use client";

import { useEffect, useState } from "react";
import TextPressure from "@/components/TextPressure";

/**
 * PressureHeadline
 *
 * The hero headline as living comic lettering: 3 stacked TextPressure rows
 * whose variable-font weight and width swell around the cursor. Falls back
 * to the static Zilla Slab headline for reduced motion, touch devices and
 * small screens, where cursor pressure means nothing.
 *
 * The real heading is always the wrapping h1 (full sentence available to
 * assistive tech via aria-label); the per-character rows are presentation.
 */
const ROWS = ["WE GET", "PEOPLE OFF", "THE COMPUTER."];

export default function PressureHeadline() {
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallOrTouch =
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (!reduced && !smallOrTouch) setInteractive(true);
  }, []);

  if (!interactive) {
    return (
      <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-gaip-black sm:text-6xl">
        We get people off the computer.
      </h1>
    );
  }

  return (
    <h1 aria-label="We get people off the computer.">
      <span aria-hidden="true" className="block select-none">
        {ROWS.map((row) => (
          <span key={row} className="block">
            <TextPressure
              as="span"
              text={row}
              textColor="#000000"
              flex={true}
              width={true}
              weight={true}
              italic={false}
              alpha={false}
              stroke={false}
              scale={false}
              minFontSize={34}
            />
          </span>
        ))}
      </span>
    </h1>
  );
}
