"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const PANEL_COUNT = 5;

/**
 * The site's signature route transition: a GSAP comic-panel-turn.
 *
 * App Router has no route-change-start hook, so we use the accepted arrival
 * pattern. On a pathname change the new route has already swapped in; we then
 * sweep 5 vertical panels down to cover the viewport in a fast left-to-right
 * stagger, hold for a beat, and release them away in sequence. Covering a
 * screen that already shows the new content reads as a page being turned.
 *
 * - First load never plays (only route changes).
 * - prefers-reduced-motion: no panels, instant swap.
 * - The overlay is fixed and pointer-events-none, so it never shifts layout.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const isFirst = useRef(true);
  const pathname = usePathname();

  const setPanelRef = (el: HTMLDivElement | null, i: number) => {
    if (el) panelsRef.current[i] = el;
  };

  useEffect(() => {
    // Never play on the initial page load.
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion: instant swap, no panels. New route starts at the top.
    if (prefersReduced) {
      window.scrollTo(0, 0);
      return;
    }

    const panels = panelsRef.current.filter(Boolean);
    if (panels.length === 0) {
      window.scrollTo(0, 0);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Start above the viewport, ready to drop in.
      tl.set(panels, { yPercent: -101, visibility: "visible" });

      // Cover: drop into place, left-to-right stagger, fast and confident.
      // ~0.25s + stagger ≈ 0.37s total.
      tl.to(panels, {
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
        stagger: 0.03,
      });

      // Screen is covered: snap the new route to the top with no visible jump.
      tl.call(() => window.scrollTo(0, 0));

      // Release: continue downward and off, in sequence. Settle easing
      // (power4.out ≈ cubic-bezier(0.22,1,0.36,1)), no bounce or overshoot.
      // ~0.34s + stagger ≈ 0.46s total.
      tl.to(
        panels,
        {
          yPercent: 101,
          duration: 0.34,
          ease: "power4.out",
          stagger: 0.03,
        },
        "+=0.04",
      );

      // Park hidden again until the next navigation.
      tl.set(panels, { visibility: "hidden" });
    }, overlayRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999] flex"
      >
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => setPanelRef(el, i)}
            className="h-full flex-1 border-l-2 border-gaip-teal bg-gaip-black"
            style={{
              transform: "translateY(-101%)",
              visibility: "hidden",
              willChange: "transform",
              // Faint halftone texture over the black base.
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
        ))}
      </div>
    </>
  );
}
