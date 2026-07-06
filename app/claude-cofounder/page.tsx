import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StepCard from "@/components/cofounder/StepCard";

export const metadata: Metadata = {
  title: "Claude Co-Founder - Get AI Powers",
  description:
    "Claude Co-Founder is a structured community for non-technical business owners who want to actually use Claude, not just hear about it.",
};

const STEPS = [
  {
    number: "1",
    title: "The Claude Audit",
    description:
      "A free call where you show us how you use Claude today and we map where the hours are hiding.",
  },
  {
    number: "2",
    title: "The setup",
    description:
      "We configure your Claude environment, teach it who your business is, and lay the foundations of your skills library.",
  },
  {
    number: "3",
    title: "The 12 weeks",
    description:
      "Weekly group coaching in pods of 3, fortnightly 1-to-1 sessions, and homework that locks the learning in.",
  },
  {
    number: "4",
    title: "The Claude Brain",
    description:
      "Your skills library, collected into one company asset. Owned by you, stored with you, improving with use.",
  },
];

/**
 * Claude Co-Founder landing page.
 *
 * Warmth palette throughout (cream / charcoal / clay / sand). This is the
 * one page on the site, alongside the About pivot-story panels, where that
 * palette is allowed. No teal here.
 */
export default function Page() {
  return (
    <main className="bg-cofounder-cream text-cofounder-charcoal">
      {/* Hero */}
      <section className="mx-auto max-w-editorial px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <p className="eyebrow text-cofounder-ink-soft">
                Claude Co-Founder
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Your AI co-founder, built brick by brick.
              </h1>
              <p className="mt-6 max-w-prose font-body text-lg text-cofounder-ink-soft">
                Claude Co-Founder is a structured community for
                non-technical business owners who want to actually use
                Claude, not just hear about it. Lessons cover
                implementation topic by topic. Support comes from people
                who&rsquo;ve done this for real clients, not just written a
                guide about it. And because Claude keeps evolving, so does
                the community.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex justify-center lg:justify-end">
            <Image
              src="/assets/claymation/claude-character-welcome.png"
              alt="Claude character welcoming you"
              width={320}
              height={320}
              className="h-auto w-full max-w-[240px] sm:max-w-xs"
              priority
            />
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-cofounder-charcoal/10 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-editorial">
          <ScrollReveal>
            <h2 className="eyebrow text-cofounder-ink-soft">How it works</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.05}>
                <StepCard {...step} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-editorial">
          <ScrollReveal>
            <div className="border border-cofounder-charcoal bg-cofounder-sand p-8 sm:p-12">
              <p className="eyebrow text-cofounder-ink-soft">
                A note from the founders
              </p>
              <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-cofounder-charcoal">
                We built Claude Co-Founder because we watched too many
                business owners pay agencies for automations they could
                now build themselves in an afternoon. We&rsquo;d rather
                teach you, because once your team knows how to do this you
                don&rsquo;t need us forever. That&rsquo;s the point.
              </p>
              <p className="mt-6 font-body text-sm text-cofounder-ink-soft">
                George Cairns and Joey Speed
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Join CTA */}
      <section className="border-t border-cofounder-charcoal/10 px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-prose">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              Join the community.
            </h2>
            <p className="mt-4 font-body text-cofounder-ink-soft">
              We keep cohorts small enough to coach properly, so
              there&rsquo;s an application rather than a checkout.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-cofounder-clay px-6 py-4 font-body text-cofounder-cream transition-colors duration-200 hover:bg-cofounder-clay-deep"
            >
              Apply to join
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
