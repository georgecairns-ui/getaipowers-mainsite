"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveHalftone from "@/components/ui/InteractiveHalftone";
import SpeechBubble from "@/components/ui/SpeechBubble";
import PressureHeadline from "@/components/ui/PressureHeadline";

/**
 * Hero - the comic splash page.
 *
 * A full-viewport superhero-comic cover: a strong teal halftone field with
 * speed lines radiating from a right-of-centre focal point, a huge Zilla Slab
 * headline over a full-opacity teal action burst, and the hero art held in a
 * large tilted comic panel on the right.
 *
 * SCROLL CHOREOGRAPHY (desktop, motion allowed):
 * the hero pins for ~150vh. As you scroll through the pin:
 *  - the splash art panel tilts upright (-1deg to 0) and scales slightly down
 *  - a black gutter frame grows in from all four edges (the page becoming a
 *    comic page)
 *  - the radiating speed lines translate
 *  - the headline block lifts up and releases
 * At the end of the pin the frame is set and normal scroll continues, so the
 * first content section arrives as the next panel of the page.
 *
 * Degradation is total: reduced motion or a viewport under 768px skips the pin
 * entirely and renders the static splash. The trigger is created inside the
 * effect and killed (ctx.revert) on unmount. The pin never exceeds ~150vh, so
 * the visitor is never trapped.
 */

// Flip to true once /assets/higgsfield/hero-reveal.png lands. The panel is
// sized identically for placeholder and image, so the render drops in by
// filename with zero re-layout.
const HERO_IMAGE_READY = true;

// Flip to true once /assets/higgsfield/hero-loop.mp4 (+ poster) lands. When
// true the panel renders a muted looping autoplay video instead of the image.
const HERO_VIDEO_READY = true;
const HERO_VIDEO_SRC = "/assets/higgsfield/hero-loop.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // The video mounts only after the window load event on desktop pointer
  // devices, so the poster image stays the LCP element and mobile visitors
  // never download the loop at all.
  const [videoLive, setVideoLive] = useState(false);
  const speedRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gutterTopRef = useRef<HTMLDivElement>(null);
  const gutterBottomRef = useRef<HTMLDivElement>(null);
  const gutterLeftRef = useRef<HTMLDivElement>(null);
  const gutterRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Static splash for reduced motion and small screens: no pin.
    if (prefersReduced || isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // ~150vh of scroll while pinned
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Art panel: un-tilts and scales down as the page assembles.
      tl.to(frameRef.current, { rotate: 0, scale: 0.92, ease: "none" }, 0);

      // Speed lines drift toward the focal point.
      tl.to(speedRef.current, { yPercent: -12, xPercent: 6, ease: "none" }, 0);

      // Headline lifts away and releases.
      tl.to(headlineRef.current, { yPercent: -34, opacity: 0, ease: "none" }, 0);

      // Gutter frame grows in from the edges over the first 70% of the pin.
      tl.to(gutterTopRef.current, { scaleY: 1, ease: "none" }, 0);
      tl.to(gutterBottomRef.current, { scaleY: 1, ease: "none" }, 0);
      tl.to(gutterLeftRef.current, { scaleX: 1, ease: "none" }, 0);
      tl.to(gutterRightRef.current, { scaleX: 1, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!HERO_VIDEO_READY) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || small) return;
    // Mount on first interaction: instant for a real visitor (the poster is
    // frame 1 of the loop, so the swap is invisible) and it keeps the video
    // out of the initial load entirely.
    const arm = () => {
      setVideoLive(true);
      window.removeEventListener("pointermove", arm);
      window.removeEventListener("scroll", arm);
      window.removeEventListener("keydown", arm);
    };
    window.addEventListener("pointermove", arm, { passive: true, once: true });
    window.addEventListener("scroll", arm, { passive: true, once: true });
    window.addEventListener("keydown", arm, { once: true });
    return () => {
      window.removeEventListener("pointermove", arm);
      window.removeEventListener("scroll", arm);
      window.removeEventListener("keydown", arm);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gaip-white"
    >
      {/* Teal halftone field: the comic page ground. Interactive (React Bits
          DotField, cursor bulge) on desktop pointer devices; static CSS
          halftone for touch, mobile and reduced motion. */}
      <InteractiveHalftone className="pointer-events-none -z-30" />

      {/* Speed lines radiating from a right-of-centre focal point. Two plates:
          the black ink rays plus a faint yellow-tinted second layer, offset,
          for the printed-comic colour flash. */}
      <div
        ref={speedRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 66% 44%, rgba(0,0,0,0.055) 0deg 0.55deg, transparent 0.55deg 3.1deg), repeating-conic-gradient(from 1.4deg at 66% 44%, rgba(255,199,44,0.07) 0deg 0.7deg, transparent 0.7deg 4.2deg)",
        }}
      />

      {/* Ben-Day misregistration field behind the art panel side only. */}
      <div
        aria-hidden="true"
        className="benday-duo pointer-events-none absolute inset-y-0 right-0 -z-20 hidden w-1/2 lg:block"
      />

      {/* Gutter frame: 4 black bars that grow in from the edges on scroll.
          Rendered flat (scale 0) at rest so the static splash stays open. */}
      <div
        ref={gutterTopRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[5vh] origin-top scale-y-0 bg-gaip-black"
      />
      <div
        ref={gutterBottomRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[5vh] origin-bottom scale-y-0 bg-gaip-black"
      />
      <div
        ref={gutterLeftRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[3vw] origin-left scale-x-0 bg-gaip-black"
      />
      <div
        ref={gutterRightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[3vw] origin-right scale-x-0 bg-gaip-black"
      />

      <div className="mx-auto grid w-full max-w-editorial items-center gap-12 px-6 py-24 lg:grid-cols-[45%_55%] lg:gap-10 lg:py-28">
        {/* Text column - solid white backing so body copy never sits on the
            halftone field. */}
        <div ref={headlineRef} className="relative">
          {/* Small black speed-line accents above the bubble. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-4 z-10 hidden gap-1.5 sm:flex sm:flex-col"
          >
            <span className="block h-0.5 w-10 -rotate-12 bg-gaip-black" />
            <span className="block h-0.5 w-7 -rotate-12 bg-gaip-black" />
            <span className="block h-0.5 w-12 -rotate-12 bg-gaip-black" />
            <span className="block h-0.5 w-6 -rotate-12 bg-gaip-black" />
          </div>

          {/* The headline lives inside a massive comic speech bubble whose
              tail points at the hero - this is his line. */}
          <SpeechBubble>
            <PressureHeadline />
            <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-gaip-black/80">
              Businesses don&rsquo;t grow through a screen. They grow through
              relationships. Claude takes care of the admin so you can spend
              your time with the people who actually grow your business.
            </p>
          </SpeechBubble>

          {/* CTA below the bubble, with a teal offset shadow that collapses
              on hover - the button physically presses down and to the right. */}
          <a
            href="#philosophy"
            className="relative z-10 ml-7 mt-8 inline-block translate-x-0 translate-y-0 bg-gaip-black px-7 py-4 font-body text-sm font-medium text-gaip-white shadow-[5px_5px_0_#00B0BE] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-gaip-teal hover:text-gaip-white hover:shadow-[2px_2px_0_#00B0BE]"
          >
            See how it works
          </a>
        </div>

        {/* Art slot: large tilted comic panel, right ~55% on desktop. Sized
            16:9 to match the Higgsfield artwork and hero loop exactly. */}
        <div ref={frameRef} className="relative -rotate-1">
          <div className="comic-panel-bold relative mx-auto aspect-video w-full max-w-2xl overflow-hidden">
            {videoLive ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO_SRC}
                poster="/assets/higgsfield/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
            ) : HERO_IMAGE_READY ? (
              <Image
                src="/assets/higgsfield/hero-poster.jpg"
                alt="Get AI Powers hero illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            ) : (
              <>
                <div
                  className="halftone-strong absolute inset-0"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-center font-mono text-xs uppercase tracking-wider text-gaip-black/60">
                    Splash art slot - Higgsfield hero render to come
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
