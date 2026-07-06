interface StepCardProps {
  number: string;
  title: string;
  description: string;
  /** Hand-laid tilt class. Defaults to upright. */
  tilt?: string;
}

/**
 * StepCard
 *
 * One numbered step in the Claude Co-Founder "how it works" grid.
 * Warmth palette only: this component belongs to /claude-cofounder. The comic
 * panel treatment here is charcoal, never the structure-layer black used on
 * every other page - this stays the one page without action-colour floods.
 */
export default function StepCard({
  number,
  title,
  description,
  tilt = "",
}: StepCardProps) {
  return (
    <div
      className={`comic-panel-bold p-6 ${tilt}`}
      style={{
        border: "3px solid #191919",
        boxShadow: "6px 6px 0 #191919",
        backgroundColor: "#FAFAF7",
      }}
    >
      <span className="font-display text-5xl text-cofounder-clay">
        {number}
      </span>
      <h3 className="mt-4 font-display text-xl text-cofounder-charcoal">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm text-cofounder-ink-soft">
        {description}
      </p>
    </div>
  );
}
