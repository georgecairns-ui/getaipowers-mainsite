import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * GeorgeStory
 *
 * Editorial two-column: a big Zilla Slab crosshead against the body. The
 * founder's story, told plainly. Numbers as digits per the house rules.
 */
export default function GeorgeStory() {
  return (
    <section className="overflow-hidden bg-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <div className="narration-box inline-block px-4 py-2 text-xs text-gaip-black">
            Chapter 04 / The Founder
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-gaip-black sm:text-5xl">
              One person who found something that worked.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="max-w-prose font-body text-lg leading-relaxed text-gaip-black/80">
              George Cairns spent 6 years in enterprise cybersecurity sales
              before founding Get AI Powers. He&rsquo;s not a developer, and
              he&rsquo;ll tell you that himself, don&rsquo;t let the glasses fool
              you. He built this business, closed partnerships and grew a client
              base while doing the equivalent of 3 days&rsquo; work in 24 hours
              using Claude, and still made it home for his newborn every night.
              This isn&rsquo;t AI hype. It&rsquo;s one person who found something
              that worked and built a business teaching other non-technical
              owners to do the same.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <blockquote className="pull-quote mt-16 max-w-prose text-2xl text-gaip-black sm:text-3xl">
            AI isn&rsquo;t here to take your job. It&rsquo;s here to hand you back
            the hours your job stole.
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
