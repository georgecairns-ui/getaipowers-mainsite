import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Stat {
  value: string;
  caption: string;
}

const STATS: Stat[] = [
  {
    value: "34",
    caption: "users trained across 5 teams in a 16-week programme",
  },
  {
    value: "12",
    caption:
      "senior leaders in a healthcare business, from ad-hoc use to confident daily use",
  },
  {
    value: "3",
    caption: "role-specific workflows built for a recruitment firm",
  },
];

// Per-panel comic tilt + landing shadow colour. Two land teal.
const PANEL_STYLE = [
  { rotate: -1, shadow: "#00B0BE" },
  { rotate: 0, shadow: "#000000" },
  { rotate: 1, shadow: "#00B0BE" },
] as const;

/**
 * ResultsStrip - CHAPTER 05 / THE RESULTS.
 *
 * Three stat panels that snap into place as bold comic panels, with the
 * trophy character as a small warm accent beside the results.
 */
export default function ResultsStrip() {
  return (
    <section className="comic-flood-teal overflow-hidden">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <div className="flex items-center justify-between gap-4">
            <div className="narration-box inline-block px-4 py-2 text-xs text-gaip-black">
              Chapter 05 / The Results
            </div>
            {/* Trophy character: a small warm accent celebrating the results.
                Cream/charcoal clay-world card, not the loud comic frame. */}
            <div className="w-20 shrink-0 rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-2 sm:w-24">
              <Image
                src="/assets/claymation/claude-character-trophy.png"
                alt="Claude character holding a trophy"
                width={192}
                height={192}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={i}
              variant="panel"
              delay={0.1 + i * 0.06}
              finalRotate={PANEL_STYLE[i].rotate}
              shadowColor={PANEL_STYLE[i].shadow}
              className="comic-panel-bold relative overflow-hidden p-8"
            >
              {/* Subtle halftone corner accent */}
              <div
                aria-hidden="true"
                className="halftone--teal pointer-events-none absolute -right-6 -top-6 h-24 w-24"
              />
              <div className="relative inline-block">
                <p className="relative z-10 font-display text-6xl font-bold leading-none text-gaip-black sm:text-7xl">
                  {stat.value}
                </p>
              </div>
              <p className="relative mt-6 font-body text-base leading-relaxed text-gaip-black/80">
                {stat.caption}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
