import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IssueHeader from "@/components/ui/IssueHeader";

export const metadata: Metadata = {
  title: "Results - Get AI Powers",
  description:
    "We publish figures when clients confirm them, not before. Because credibility is the whole point.",
};

const STATS = [
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

// Hand-laid tilt + landing shadow colour, alternating across the flood.
const STAT_STYLE = [
  { rotate: -1, shadow: "#000000" },
  { rotate: 0, shadow: "#000000" },
  { rotate: 1, shadow: "#000000" },
] as const;

export default function Page() {
  return (
    <main>
      <IssueHeader
        issue="Issue 04"
        title="Numbers we can stand behind"
        no="No. 4"
      />

      <ScrollReveal as="section" className="border-b border-gaip-black">
        <div className="mx-auto max-w-editorial px-6 py-20 md:py-28">
          <p className="eyebrow text-gaip-teal">RESULTS</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-gaip-black md:text-6xl">
            Numbers we can stand behind.
          </h1>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-black/80 md:text-xl">
            We publish figures when clients confirm them, not before. Because
            credibility is the whole point.
          </p>
        </div>
      </ScrollReveal>

      <section className="comic-flood-yellow">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STATS.map(({ value, caption }, i) => (
              <ScrollReveal
                key={value}
                variant="panel"
                delay={i * 0.06}
                finalRotate={STAT_STYLE[i].rotate}
                shadowColor={STAT_STYLE[i].shadow}
                className="comic-panel-bold flex flex-col justify-between gap-4 p-8"
              >
                <span className="font-display text-6xl font-bold text-gaip-black md:text-7xl">
                  {value}
                </span>
                <p className="font-body text-sm text-gaip-black/80">
                  {caption}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="border-y border-gaip-black">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <blockquote className="pull-quote chromatic-text max-w-prose text-2xl text-gaip-black md:text-3xl">
            The ROI isn&rsquo;t leads or clicks. It&rsquo;s hours handed back
            to your team every week, and the skill to keep freeing more.
          </blockquote>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section">
        <div className="mx-auto max-w-editorial px-6 py-20 text-center md:py-28">
          <h2 className="font-display text-3xl font-semibold text-gaip-black md:text-4xl">
            Ready to see where your team stands?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-gaip-black px-8 py-4 font-body text-base text-gaip-white transition-colors duration-200 hover:bg-gaip-teal"
          >
            Book a Claude Quick Wins Session
          </Link>
        </div>
      </ScrollReveal>
    </main>
  );
}
