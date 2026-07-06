import ScrollReveal from "@/components/ui/ScrollReveal";

const PARTNER_BADGES = [
  "Anthropic certification",
  "Claude Partner Network",
];

// Per-testimonial comic tilt + landing shadow colour. Two land teal.
const TESTIMONIAL_STYLE = [
  { rotate: -1, shadow: "#000000" },
  { rotate: 0, shadow: "#00B0BE" },
  { rotate: 1, shadow: "#00B0BE" },
] as const;

/**
 * AuthorityStrip - CHAPTER 01 / WHY TRUST US.
 *
 * The credibility engine directly under the hero. Honest placeholders
 * throughout: partner badge wording, testimonials and the intro video are
 * all awaiting George's confirmation. Nothing here is invented.
 */
export default function AuthorityStrip() {
  return (
    <section className="overflow-hidden bg-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-20 lg:py-24">
        <ScrollReveal>
          <div className="narration-box inline-block px-4 py-2 text-xs text-gaip-black">
            Chapter 01 / Why Trust Us
          </div>
        </ScrollReveal>

        {/* Partner badges as comic chips with hand-laid tilts. */}
        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-6">
            {PARTNER_BADGES.map((badge, i) => (
              <div
                key={badge}
                className={`comic-panel-bold flex items-center gap-3 px-4 py-3 ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <span className="font-mono text-sm uppercase tracking-wide text-gaip-black">
                  {badge}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-action-grey">
                  wording being confirmed
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials as snapping comic panels. */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {TESTIMONIAL_STYLE.map((style, i) => (
            <ScrollReveal
              key={i}
              as="figure"
              variant="panel"
              delay={0.1 + i * 0.06}
              finalRotate={style.rotate}
              shadowColor={style.shadow}
              className="comic-panel-bold p-6"
            >
              <blockquote className="pull-quote text-xl italic text-gaip-black/80">
                Testimonial to come. George is choosing the 3 best.
              </blockquote>
              <div className="mt-6 h-px w-full bg-gaip-black/15" />
            </ScrollReveal>
          ))}
        </div>

        {/* Video slot as a bold comic panel. */}
        <ScrollReveal
          variant="panel"
          delay={0.15}
          className="comic-panel-bold relative mt-16 flex aspect-video w-full items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 fill-gaip-black"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="font-mono text-xs uppercase tracking-wider text-gaip-black/70">
              Video: George, 90 seconds on getting people off the computer
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
