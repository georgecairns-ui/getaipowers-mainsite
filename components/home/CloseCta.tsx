import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Starburst from "@/components/ui/Starburst";
import NewsletterSignup from "@/components/NewsletterSignup";

/**
 * CloseCta
 *
 * The page's closing black panel. Primary path: book a session, with a
 * Starburst that fades in behind the button on hover. Quieter path: a compact
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
              {/* The page's single onomatopoeia: a POW inside an action
                  burst. Decorative, so hidden from assistive tech. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-4 z-0 hidden rotate-[-6deg] lg:-right-8 xl:block"
              >
                <div className="relative flex items-center justify-center">
                  <Starburst size={190} colour="red" animate={false} />
                  <span className="absolute font-display text-3xl font-bold uppercase tracking-tight text-gaip-white">
                    Pow!
                  </span>
                </div>
              </div>

              <h2 className="relative z-10 max-w-[12ch] font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Ready when you are.
              </h2>

              <div className="group relative mt-10 inline-block">
                {/* Starburst settles in behind the button on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-settle group-hover:opacity-60"
                >
                  <Starburst size={280} colour="teal" animate={false} />
                </div>
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
