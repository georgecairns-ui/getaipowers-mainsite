import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterSignup from "@/components/NewsletterSignup";

/**
 * CloseCta
 *
 * The page's closing black panel. Primary path: book a session, with the
 * level-up character alongside the invitation. Quieter path: a compact
 * newsletter signup for visitors not ready to book.
 */
export default function CloseCta() {
  return (
    <section className="overflow-hidden bg-gaip-black text-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <div className="narration-box inline-block px-4 py-2 text-xs text-gaip-black">
            Chapter 06 / Your Move
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <ScrollReveal>
            <div className="relative">
              <div className="flex flex-wrap items-center gap-6">
                <h2 className="relative z-10 max-w-[12ch] font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Ready when you are.
                </h2>

                {/* Level-up character beside the invitation, where the POW
                    burst used to sit. Cream/charcoal clay-world card. */}
                <div className="w-24 shrink-0 rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-2 sm:w-28">
                  <Image
                    src="/assets/claymation/claude-character-levelup.png"
                    alt="Claude character levelling up, ready to begin"
                    width={256}
                    height={256}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-10 inline-block">
                <Link
                  href="/contact"
                  className="inline-block bg-gaip-white px-7 py-4 font-body text-sm font-medium text-gaip-black transition-colors duration-200 hover:bg-gaip-teal hover:text-gaip-white"
                >
                  Book a Claude Quick Wins Session
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <NewsletterSignup variant="dark" testId="newsletter-form-close" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
