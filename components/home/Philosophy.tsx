import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Philosophy - CHAPTER 02 / THE PHILOSOPHY.
 *
 * The black-background argument for why Claude is different. The Claude
 * character now sits in a bold comic panel with a white offset shadow and a
 * flat white thought-bubble tail pointing at it.
 */
export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-gaip-black text-gaip-white"
    >
      {/* Orange halftone corner band, top-right. Decorative, behind content. */}
      <div
        aria-hidden="true"
        className="halftone-orange pointer-events-none absolute -right-10 -top-10 h-56 w-72 rotate-12"
      />

      <div className="relative mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <div className="narration-box inline-block px-4 py-2 text-xs text-gaip-black">
            Chapter 02 / The Philosophy
          </div>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <ScrollReveal>
            <p className="max-w-prose font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">
              AI was supposed to give people their time back. For most
              businesses it&rsquo;s done the opposite, another screen, another
              tool between you and the people you&rsquo;re trying to help.
              Claude is different because it hands you back the hours instead of
              adding another screen of its own.
            </p>
          </ScrollReveal>

          <div className="relative mx-auto w-full max-w-[18rem] lg:mx-0">
            {/* Flat white thought-bubble tail pointing at the panel. */}
            <svg
              aria-hidden="true"
              viewBox="0 0 60 40"
              className="pointer-events-none absolute -left-6 -top-6 h-10 w-14 fill-gaip-white"
            >
              <circle cx="48" cy="30" r="7" />
              <circle cx="28" cy="18" r="5" />
              <circle cx="12" cy="8" r="3.5" />
            </svg>

            <ScrollReveal
              delay={0.1}
              className="rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-3"
            >
              <Image
                src="/assets/claymation/claude-character-thinking.png"
                alt="Claude character thinking through a problem with you"
                width={512}
                height={512}
                className="h-auto w-full rounded-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
