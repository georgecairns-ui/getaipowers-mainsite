import type { ReactNode } from "react";

/**
 * SpeechBubble
 *
 * A massive comic speech bubble: white fill, thick black outline, hard flat
 * offset shadow, and an outlined tail pointing out of the right edge (toward
 * whoever is doing the talking). Pure CSS and 1 inline SVG - flat, crisp,
 * no gradients or blurs.
 */
export default function SpeechBubble({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative rounded-[2.5rem] border-4 border-gaip-black bg-gaip-white px-7 py-9 sm:px-10 sm:py-12"
        style={{ boxShadow: "8px 8px 0 #000000" }}
      >
        {children}
      </div>
      {/* Tail: outlined triangle bursting out of the lower-right edge,
          pointing at the hero character. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 bottom-14 hidden h-20 w-20 lg:block"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M2 12 L74 52 L14 60 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Mask the tail's join so bubble and tail read as one shape. */}
        <rect x="0" y="14" width="10" height="44" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
