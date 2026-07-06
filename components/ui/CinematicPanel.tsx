"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * CinematicPanel
 *
 * A 16:9 comic splash panel that starts as a poster image (fast, the LCP
 * candidate stays an image) and swaps to a muted looping video on the
 * visitor's first interaction. Mobile, touch and reduced-motion visitors
 * keep the poster and never download the loop.
 */
export default function CinematicPanel({
  videoSrc,
  posterSrc,
  alt,
  className = "",
}: {
  videoSrc: string;
  posterSrc: string;
  alt: string;
  className?: string;
}) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || small) return;
    const arm = () => {
      setLive(true);
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
    <div className={`relative aspect-video overflow-hidden ${className}`}>
      {live ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <Image
          src={posterSrc}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1152px"
          className="object-cover"
        />
      )}
    </div>
  );
}
