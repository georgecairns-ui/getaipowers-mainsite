/**
 * Small flat line glyphs for the /services comic-panel grid.
 *
 * Each icon is a single-colour outline (stroke uses currentColor), so the
 * parent element sets the colour via a Tailwind text-* class. No fills,
 * shadows or gradients, in keeping with the flat comic-accent style.
 */

interface IconProps {
  className?: string;
}

const STROKE_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BrainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        {...STROKE_PROPS}
        d="M11 5c-3 0-5 2-5 5 0 1 .3 2 .8 2.8C5.9 13.6 5 15 5 16.5 5 19 7 21 9.5 21c.3 1.7 1.8 3 3.5 3h1.5V6.9C13.7 5.7 12.4 5 11 5z"
      />
      <path
        {...STROKE_PROPS}
        d="M21 5c3 0 5 2 5 5 0 1-.3 2-.8 2.8.9.8 1.6 2.2 1.6 3.7 0 2.5-2 4.5-4.5 4.5-.3 1.7-1.8 3-3.5 3H18V6.9c.8-1.2 2.1-1.9 3-1.9z"
      />
      <path {...STROKE_PROPS} d="M16 6.9v17.6" />
    </svg>
  );
}

export function LightningIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path {...STROKE_PROPS} d="M18 3 6 19h7l-2 10 14-16h-7l2-10z" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect
        {...STROKE_PROPS}
        x="4"
        y="13"
        width="14"
        height="7"
        rx="3.5"
        transform="rotate(-40 11 16.5)"
      />
      <rect
        {...STROKE_PROPS}
        x="14"
        y="12"
        width="14"
        height="7"
        rx="3.5"
        transform="rotate(-40 21 15.5)"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle {...STROKE_PROPS} cx="16" cy="16" r="12" />
      <path {...STROKE_PROPS} d="M16 9v7l5 3" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        {...STROKE_PROPS}
        d="M16 8c-2-2-6-3-11-3v18c5 0 9 1 11 3 2-2 6-3 11-3V5c-5 0-9 1-11 3z"
      />
      <path {...STROKE_PROPS} d="M16 8v18" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        {...STROKE_PROPS}
        d="M16 3c1 7 2 9 13 13-11 4-12 6-13 13-1-7-2-9-13-13 11-4 12-6 13-13z"
      />
    </svg>
  );
}
