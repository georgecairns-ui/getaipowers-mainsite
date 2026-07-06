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
  /** Meaningful description of this panel's quadrant of the strip artwork. */
  alt: string;
  /** background-position selecting this panel's quadrant of the 2x2 strip. */
  artPosition: string;
  /** Hand-laid tilt on the panel container - alternating tiny rotations. */
  tilt: string;
  /** Flood colour zone this panel is printed on, in page rotation. */
  flood: string;
}

/**
 * The four beats of the pivot story, verbatim. Panels 1 and 2 sit on white
 * (structure layer). Panels 3 and 4 carry the warmth layer - cream ground,
 * charcoal text, a clay accent rule - marking the moment the business changed.
 *
 * The artwork is a single 2000x1116 comic strip whose quadrants match the
 * panels in order: top-left 1, top-right 2, bottom-left 3, bottom-right 4.
 * Each slot shows its quadrant via background-size 200% 200% and a corner
 * background-position. Slots use aspect-[1000/558] (the exact quadrant
 * ratio, ~16:9) so the crop is pixel-true with no stretch.
 */
const STRIP_ART = "/assets/higgsfield/about-4panel-strip.png";

const PANELS: Panel[] = [
  {
    n: 1,
    tone: "structure",
    copy: "We started as an AI agency. We built bespoke automations for clients, custom integrations, one-off tools, the works.",
    alt: "Comic panel 1: the agency team building bespoke automation machines for clients.",
    artPosition: "0% 0%",
    tilt: "-rotate-1",
    flood: "comic-flood-yellow",
  },
  {
    n: 2,
    tone: "structure",
    copy: "Then 2026 happened. Claude and a new generation of accessible tools meant a business owner with zero technical background could build, in about 30 minutes, by talking into their phone, what used to take us weeks and cost thousands of pounds.",
    alt: "Comic panel 2: a business owner builds the same automation themselves by talking into their phone.",
    artPosition: "100% 0%",
    tilt: "rotate-[0.5deg]",
    flood: "comic-flood-teal",
  },
  {
    n: 3,
    tone: "warmth",
    copy: "Charging someone tens of thousands of pounds for an automation that does one single thing, that they don't understand and can't maintain, stopped feeling honest the moment the same result became achievable by the client alone, for the cost of a subscription.",
    alt: "Comic panel 3: an invoice for tens of thousands of pounds that no longer feels honest.",
    artPosition: "0% 100%",
    tilt: "-rotate-[0.5deg]",
    flood: "comic-flood-orange",
  },
  {
    n: 4,
    tone: "warmth",
    copy: "So we pivoted. We built Claude Co-Founder: structured lessons, real implementation support, and a place to keep learning as Claude keeps changing, for the non-technical business owners who want their time back.",
    alt: "Comic panel 4: the pivot to coaching, teaching business owners to build with Claude themselves.",
    artPosition: "100% 100%",
    tilt: "rotate-1",
    flood: "comic-flood-green",
  },
];

/**
 * cofounder-cream, applied inline on the pivot panels. The .comic-panel-bold
 * utility is unlayered CSS and sets a white background, which outranks
 * Tailwind's layered bg-* utilities in the cascade, so the cream must win
 * via inline style.
 */
const COFOUNDER_CREAM = "#FAFAF7";

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
 * The comic frame is the plain CSS .comic-panel-bold utility (3px black
 * border, hard flat 6px offset shadow) on the panel itself, so it is
 * guaranteed crisp in every state - no JS, reduced motion, any viewport.
 * The panel's entrance fade brings the offset shadow in with it, so each
 * panel lands with its shadow appearing as it settles. The tiny alternating
 * rotations are static classes; GSAP decomposes the existing transform and
 * preserves the rotation while tweening y.
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
          // Each panel is printed on its own flood colour zone, in page
          // rotation (yellow, teal, orange, green), so the grid reads like a
          // colour-blocked comic page. The white/cream panel keeps all body
          // copy on a solid backing - text never sits on the flood itself.
          <div
            key={panel.n}
            className={`${panel.flood} border-[3px] border-gaip-black p-5 md:p-6`}
          >
            <article
              data-panel
              className={`comic-panel-bold relative flex h-full flex-col ${panel.tilt}`}
              style={warmth ? { backgroundColor: COFOUNDER_CREAM } : undefined}
            >
              <div className="flex h-full flex-col p-6 md:p-8">
              {/* Numbered narration box, top-left. */}
              <div
                data-narration
                className="narration-box self-start px-3 py-1.5 text-xs text-gaip-black"
              >
                Panel {panel.n}
              </div>

              {/* Illustration: this panel's quadrant of the 2x2 strip art. */}
              <div
                data-illus
                role="img"
                aria-label={panel.alt}
                className="mt-5 aspect-[1000/558] border-2 border-gaip-black"
                style={{
                  backgroundImage: `url(${STRIP_ART})`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: panel.artPosition,
                }}
              />

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
          </div>
        );
      })}
    </div>
  );
}
