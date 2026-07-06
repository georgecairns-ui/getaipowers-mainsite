"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Starburst from "@/components/ui/Starburst";

/**
 * Hero
 *
 * The home page's craft piece. A full-viewport editorial composition: a
 * teal Starburst settles behind the headline on load, and as the visitor
 * scrolls the first screen a restrained, scrubbed parallax plays out.
 *
 * Choreography (all tied to one scrubbed ScrollTrigger over the hero):
 *  - the emblem drifts up and tilts a few degrees, at its own slower rate
 *  - the halftone band eases downward, opening space beneath the headline
 *  - the illustration frame lifts, revealing itself as the text recedes
 *  - the headline settles down and softens, releasing as you leave the hero
 *
 * Degradation is total: reduced motion or a mobile viewport skips the
 * ScrollTrigger entirely and renders the static composition. The trigger is
 * registered inside the effect and reverted (killed) on unmount.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const halftoneRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Static composition for reduced motion and small screens.
    if (prefersReduced || isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // Each tween spans the whole scroll, so the layers separate smoothly.
      tl.to(emblemRef.current, { yPercent: -24, rotate: -5, ease: "none" }, 0);
      tl.to(halftoneRef.current, { yPercent: 34, ease: "none" }, 0);
      tl.to(frameRef.current, { y: -52, ease: "none" }, 0);
      tl.to(headlineRef.current, { y: 44, opacity: 0.4, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gaip-white"
    >
      {/* Halftone band, parallaxed */}
      <div
        ref={halftoneRef}
        aria-hidden="true"
        className="halftone--teal pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72"
      />

      {/* Emblem drift, low opacity */}
      <div
        ref={emblemRef}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 hidden lg:block"
      >
        <Image
          src="/assets/logo/GAIP-emblem-teal-RGB.svg"
          alt=""
          width={520}
          height={520}
          priority
          className="h-[32rem] w-[32rem] opacity-[0.06]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-editorial items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Text column */}
        <div className="relative">
          {/* Starburst settling behind the headline on load */}
          {/* Opacity lives on this wrapper: the Starburst animates its own
              inline opacity to 1, which would override a class on the SVG. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 -z-10 opacity-[0.12]"
          >
            <Starburst size={560} colour="teal" />
          </div>

          <div ref={headlineRef}>
            <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-gaip-black sm:text-6xl lg:text-7xl">
              We get people off the computer.
            </h1>
            <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-gaip-black/80">
              Businesses don&rsquo;t grow through a screen. They grow through
              relationships. Claude takes care of the admin so you can spend
              your time with the people who actually grow your business.
            </p>
            <a
              href="#philosophy"
              className="mt-8 inline-block bg-gaip-black px-7 py-4 font-body text-sm font-medium text-gaip-white transition-colors duration-200 hover:bg-gaip-teal hover:text-gaip-white"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Illustration slot: sized 4:5 so the Higgsfield render drops in later */}
        <div ref={frameRef} className="relative">
          <div className="comic-panel relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-gaip-white">
            <div className="halftone absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-center font-mono text-xs uppercase tracking-wider text-gaip-black/60">
                Illustration slot - Higgsfield hero render to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
