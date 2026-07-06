import Image from "next/image";
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
 * The flagship, and the page's emotional centre. The only warmth-layer section
 * on the page: cofounder cream and charcoal, clay CTA, the large celebration
 * character. This is the site's one licensed use of the Claude Co-Founder
 * palette outside the /claude-cofounder page. Everything funnels here.
 */
export default function CofounderPanel() {
  return (
    <section className="bg-cofounder-cream text-cofounder-charcoal">
      <div className="mx-auto max-w-editorial px-6 py-28 lg:py-44">
        <ScrollReveal>
          <div className="narration-box inline-block px-4 py-2 text-xs text-cofounder-charcoal">
            Chapter 03 / The Flagship
          </div>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <ScrollReveal>
              <p className="eyebrow font-mono text-cofounder-ink-soft">
                The flagship
              </p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Claude Co-Founder
              </h2>
              <p className="mt-8 font-display text-2xl font-semibold leading-snug text-cofounder-clay-deep sm:text-3xl">
                This is where we bring you in.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
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
                className="mt-12 inline-block translate-x-0 translate-y-0 bg-cofounder-clay px-7 py-4 font-body text-sm font-medium text-cofounder-cream shadow-[5px_5px_0_#A85842] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-cofounder-clay-deep hover:shadow-[2px_2px_0_#A85842]"
              >
                Meet Claude Co-Founder
              </Link>
            </ScrollReveal>
          </div>

          {/* The large celebration character: the emotional centre of the page.
              Cream/charcoal clay-world card, generous size. */}
          <ScrollReveal delay={0.1}>
            <div className="mx-auto w-full max-w-md rounded-3xl border-2 border-cofounder-charcoal bg-cofounder-cream p-4">
              <Image
                src="/assets/claymation/claude-character-celebration.png"
                alt="Claude character celebrating with arms raised"
                width={768}
                height={768}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
