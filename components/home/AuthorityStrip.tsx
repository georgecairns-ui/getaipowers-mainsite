import ScrollReveal from "@/components/ui/ScrollReveal";

const PARTNER_BADGES = [
  "Anthropic certification",
  "Claude Partner Network",
];

/**
 * AuthorityStrip
 *
 * The credibility engine directly under the hero. Honest placeholders
 * throughout: partner badge wording, testimonials and the intro video are
 * all awaiting George's confirmation. Nothing here is invented.
 */
export default function AuthorityStrip() {
  return (
    <section className="bg-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-20 lg:py-24">
        <ScrollReveal>
          <p className="eyebrow text-gaip-black/60">Why businesses trust us</p>
        </ScrollReveal>

        {/* Partner badges */}
        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-4">
            {PARTNER_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 border border-gaip-black px-4 py-3"
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

        {/* Testimonials */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <figure key={i}>
                <blockquote className="pull-quote text-xl italic text-gaip-black/80">
                  Testimonial to come. George is choosing the 3 best.
                </blockquote>
                <div className="mt-6 h-px w-full bg-gaip-black/15" />
              </figure>
            ))}
          </div>
        </ScrollReveal>

        {/* Video slot */}
        <ScrollReveal delay={0.15}>
          <div className="comic-panel relative mt-16 flex aspect-video w-full items-center justify-center bg-gaip-white">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
