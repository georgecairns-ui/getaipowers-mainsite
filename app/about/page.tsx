import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ComicStrip from "@/components/about/ComicStrip";
import IssueHeader from "@/components/ui/IssueHeader";

export const metadata: Metadata = {
  title: "About - Get AI Powers",
  description:
    "We used to build automations for clients. Then the ground moved. The honest version of how Get AI Powers became Claude Co-Founder.",
};

export default function Page() {
  return (
    <main className="pb-28">
      <IssueHeader issue="Issue 02" title="How we got here" no="No. 2" />

      {/* Page header: Ben-Day misregistration band behind the H1 */}
      <section className="relative overflow-hidden">
        {/* Visible Ben-Day duo band across the header area. It stops above
            the standfirst, because the strong halftone sits behind display
            elements, never directly under body copy. */}
        <div
          aria-hidden="true"
          className="benday-duo pointer-events-none absolute inset-x-0 top-0 h-56 md:h-72"
        />
        <div className="relative mx-auto max-w-editorial px-6 pt-16 md:pt-24">
          <ScrollReveal>
            <p className="eyebrow text-gaip-teal">About</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-gaip-black md:text-7xl">
              How we got here
            </h1>
            <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-gaip-black md:text-xl">
              We used to build automations for clients. Then the ground moved.
              Here&apos;s the honest version.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The 4-panel comic strip */}
      <section className="mt-16 md:mt-20">
        <ComicStrip />
      </section>

      {/* Claude, mid-shrug: the same beat as panel 3, the moment the old
          model stopped feeling honest. Warm cream/charcoal clay-world card,
          decorative, no new copy. */}
      <section className="mx-auto max-w-editorial px-6">
        <ScrollReveal>
          <div className="mt-10 flex justify-center md:justify-start">
            <div className="w-24 shrink-0 rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-2 sm:w-28">
              <Image
                src="/assets/claymation/claude-character-shrug.png"
                alt="Claude character shrugging"
                width={256}
                height={256}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing pull quote, outside the panels */}
      <section className="mx-auto max-w-editorial px-6">
        <ScrollReveal>
          <div className="mt-20 flex flex-col items-start gap-8 md:mt-28 md:flex-row md:items-center">
            <blockquote className="pull-quote chromatic-text max-w-3xl text-2xl text-gaip-black md:text-3xl">
              This isn&apos;t about replacing people with AI. It&apos;s the
              opposite. It&apos;s giving people back the hours AI can legitimately
              take off their plate, so they can spend that time on the parts of
              the business that actually need a human.
            </blockquote>
            <div className="w-24 shrink-0 rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-2 sm:w-28">
              <Image
                src="/assets/claymation/claude-character-celebration.png"
                alt="Claude character celebrating with arms raised"
                width={256}
                height={256}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Modest CTA row */}
      <section className="mx-auto max-w-editorial px-6">
        <ScrollReveal>
          <div className="mt-14 md:mt-16">
            <Link
              href="/claude-cofounder"
              className="inline-block bg-gaip-black px-6 py-4 font-body text-base text-gaip-white transition-colors duration-200 hover:bg-gaip-teal"
            >
              Meet Claude Co-Founder
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
