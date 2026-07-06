interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

/**
 * StepCard
 *
 * One numbered step in the Claude Co-Founder "how it works" grid.
 * Warmth palette only: this component belongs to /claude-cofounder.
 */
export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="border border-cofounder-charcoal/15 p-6">
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
