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

/**
 * ResultsStrip
 *
 * Three comic-panel stat cards, all confirmed.
 */
export default function ResultsStrip() {
  return (
    <section className="bg-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <p className="eyebrow text-gaip-black/60">The results so far</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="comic-panel relative overflow-hidden bg-gaip-white p-8"
              >
                {/* Subtle halftone corner accent */}
                <div
                  aria-hidden="true"
                  className="halftone--teal pointer-events-none absolute -right-6 -top-6 h-24 w-24"
                />
                <p className="font-display text-6xl font-bold leading-none text-gaip-black sm:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-6 font-body text-base leading-relaxed text-gaip-black/80">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
