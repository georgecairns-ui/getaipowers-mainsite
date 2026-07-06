import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Starburst from "@/components/ui/Starburst";
import ComicStrip from "@/components/about/ComicStrip";

export const metadata: Metadata = {
  title: "About - Get AI Powers",
  description:
    "We used to build automations for clients. Then the ground moved. The honest version of how Get AI Powers became Claude Co-Founder.",
};

export default function Page() {
  return (
    <main className="pb-28">
      {/* Page header: teal halftone band behind, Starburst settling behind the H1 */}
      <section className="relative overflow-hidden">
        {/* Visible teal halftone band across the header area. It stops above
            the standfirst, because the strong halftone sits behind display
            elements, never directly under body copy. */}
        <div
          aria-hidden="true"
          className="halftone-teal-strong pointer-events-none absolute inset-x-0 top-0 h-56 md:h-72"
        />
        <div className="relative mx-auto max-w-editorial px-6 pt-16 md:pt-24">
          <ScrollReveal>
            <p className="eyebrow text-gaip-teal">About</p>
            <div className="relative">
              {/* Full-strength teal burst settling behind the H1, offset up-left. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-28 md:-left-20 md:-top-32"
              >
                <Starburst size={360} colour="teal" />
              </div>
              <h1 className="relative mt-4 font-display text-5xl font-bold leading-[1.05] text-gaip-black md:text-7xl">
                How we got here
              </h1>
            </div>
            <p className="relative mt-6 max-w-prose font-body text-lg leading-relaxed text-gaip-black md:text-xl">
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

      {/* Closing pull quote, outside the panels */}
      <section className="mx-auto max-w-editorial px-6">
        <ScrollReveal>
          <blockquote className="pull-quote mt-20 max-w-3xl text-2xl text-gaip-black md:mt-28 md:text-3xl">
            This isn&apos;t about replacing people with AI. It&apos;s the
            opposite. It&apos;s giving people back the hours AI can legitimately
            take off their plate, so they can spend that time on the parts of
            the business that actually need a human.
          </blockquote>
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
