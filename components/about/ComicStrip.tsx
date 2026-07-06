"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Tone = "structure" | "warmth";

interface Panel {
  n: number;
  tone: Tone;
  copy: string;
}

/**
 * The four beats of the pivot story, verbatim. Panels 1 and 2 sit on white
 * (structure layer). Panels 3 and 4 carry the warmth layer - cream ground,
 * charcoal text, a clay accent rule - marking the moment the business changed.
 */
const PANELS: Panel[] = [
  {
    n: 1,
    tone: "structure",
    copy: "We started as an AI agency. We built bespoke automations for clients, custom integrations, one-off tools, the works.",
  },
  {
    n: 2,
    tone: "structure",
    copy: "Then 2026 happened. Claude and a new generation of accessible tools meant a business owner with zero technical background could build, in about 30 minutes, by talking into their phone, what used to take us weeks and cost thousands of pounds.",
  },
  {
    n: 3,
    tone: "warmth",
    copy: "Charging someone tens of thousands of pounds for an automation that does one single thing, that they don't understand and can't maintain, stopped feeling honest the moment the same result became achievable by the client alone, for the cost of a subscription.",
  },
  {
    n: 4,
    tone: "warmth",
    copy: "So we pivoted. We built Claude Co-Founder: structured lessons, real implementation support, and a place to keep learning as Claude keeps changing, for the non-technical business owners who want their time back.",
  },
];

const ILLUSTRATION_LABEL = "Illustration to come - Higgsfield 4-panel sequence";

/**
 * ComicStrip
 *
 * The page centrepiece: a literal 4-panel comic strip that builds panel by
 * panel on scroll. Each panel settles into place, the narration box drops in,
 * then the copy fades up - staggered, settle easing, no bounce.
 *
 * - Desktop: staggered per-panel build (panel settles, narration box drops,
 *   illustration fades, copy fades up), 2x2 grid.
 * - Mobile: a single simpler fade-and-lift per panel, stacked.
 * - Reduced motion: everything static, nothing animates.
 *
 * The 2px black comic border is the plain CSS .comic-panel utility on the
 * panel itself, so it is guaranteed crisp in every state - no JS, reduced
 * motion, any viewport.
 */
export default function ComicStrip() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const conditions = context.conditions;
        if (!conditions) return;
        const { isDesktop, reduce } = conditions;

        // Reduced motion: leave every panel in its resting, fully drawn state.
        if (reduce) return;

        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root);

        panels.forEach((panel) => {
          const narration = panel.querySelector("[data-narration]");
          const illustration = panel.querySelector("[data-illus]");
          const copy = panel.querySelectorAll("[data-copy]");

          if (isDesktop) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                once: true,
              },
            });

            // 1. The panel itself (border included) settles into place.
            tl.from(
              panel,
              {
                autoAlpha: 0,
                y: 12,
                duration: 0.55,
                ease: "power4.out",
              },
              0,
            )
              // 2. Narration box settles down into place.
              .from(
                narration,
                { autoAlpha: 0, y: -10, duration: 0.4, ease: "power3.out" },
                0.2,
              )
              // 3. Illustration slot fades in.
              .from(
                illustration,
                { autoAlpha: 0, duration: 0.45, ease: "power2.out" },
                0.28,
              )
              // 4. Copy fades up.
              .from(
                copy,
                {
                  autoAlpha: 0,
                  y: 16,
                  duration: 0.5,
                  ease: "power3.out",
                  stagger: 0.08,
                },
                0.34,
              );
          } else {
            // Mobile: one simple, calm reveal per stacked panel.
            gsap.from(panel, {
              autoAlpha: 0,
              y: 24,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                once: true,
              },
            });
          }
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="mx-auto grid max-w-editorial grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-8"
    >
      {PANELS.map((panel) => {
        const warmth = panel.tone === "warmth";
        return (
          <article
            key={panel.n}
            data-panel
            className={`comic-panel relative flex flex-col ${
              warmth ? "bg-cofounder-cream" : "bg-gaip-white"
            }`}
          >
            <div className="flex h-full flex-col p-6 md:p-8">
              {/* Numbered narration box, top-left. */}
              <div
                data-narration
                className="self-start border border-gaip-black bg-action-beige px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-gaip-black"
              >
                Panel {panel.n}
              </div>

              {/* Illustration slot: halftone fill with a centred label. */}
              <div
                data-illus
                className="relative mt-5 flex aspect-[4/3] items-center justify-center overflow-hidden border border-gaip-black"
              >
                <div className="halftone absolute inset-0" aria-hidden="true" />
                <span
                  className={`relative px-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] ${
                    warmth ? "text-cofounder-ink-soft" : "text-action-grey"
                  }`}
                >
                  {ILLUSTRATION_LABEL}
                </span>
              </div>

              {/* Clay accent rule on the pivot panels only. */}
              {warmth && (
                <div
                  data-copy
                  className="mt-6 h-0.5 w-12 bg-cofounder-clay"
                  aria-hidden="true"
                />
              )}

              {/* Panel copy. */}
              <p
                data-copy
                className={`${warmth ? "mt-4" : "mt-6"} font-body text-base leading-relaxed ${
                  warmth ? "text-cofounder-charcoal" : "text-gaip-black"
                }`}
              >
                {panel.copy}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
