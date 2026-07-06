import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const POINTS = [
  "Hands-on training.",
  "Real implementation, not just theory.",
  "Built to keep working as Claude keeps changing.",
  "A community, not a one-off workshop.",
];

/**
 * CofounderPanel
 *
 * The only warmth-layer section on the page. Cofounder cream and charcoal,
 * clay CTA. This is the site's one licensed use of the Claude Co-Founder
 * palette outside the /claude-cofounder page.
 */
export default function CofounderPanel() {
  return (
    <section className="bg-cofounder-cream text-cofounder-charcoal">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <p className="eyebrow font-mono text-cofounder-ink-soft">
            The flagship
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Claude Co-Founder
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {POINTS.map((point) => (
              <p
                key={point}
                className="border-t border-cofounder-charcoal/20 pt-4 font-display text-2xl leading-snug"
              >
                {point}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Link
            href="/claude-cofounder"
            className="mt-12 inline-block bg-cofounder-clay px-7 py-4 font-body text-sm font-medium text-cofounder-cream transition-colors duration-200 hover:bg-cofounder-clay-deep"
          >
            Meet Claude Co-Founder
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
