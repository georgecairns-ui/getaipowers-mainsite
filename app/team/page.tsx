import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IssueHeader from "@/components/ui/IssueHeader";

export const metadata: Metadata = {
  title: "Team - Get AI Powers",
  description:
    "A small team that teaches businesses to do this themselves, which tells you most of what you need to know about us.",
};

const TEAM = [
  {
    name: "George Cairns",
    role: "Founder and CEO",
    initials: "GC",
    note: "6 years in enterprise cybersecurity sales before founding Get AI Powers.",
  },
  {
    name: "Joey Speed",
    role: "Co-founder, Claude Co-Founder",
    initials: "JS",
  },
  {
    name: "Aaron Godwin",
    role: "CTO",
    initials: "AG",
  },
  {
    name: "Teodora Sandu",
    role: "Role being confirmed",
    initials: "TS",
  },
  {
    name: "Tyler Myeo",
    role: "Role being confirmed",
    initials: "TM",
  },
  {
    name: "Arun Godwin-Patel",
    role: "Halo Technology Labs, key technical partner",
    initials: "AGP",
  },
];

// Photo-placeholder texture cycles through these 4 so no 2 adjacent cards
// match. Card tilt alternates independently.
const PHOTO_BG = [
  "halftone-yellow",
  "halftone-orange",
  "halftone-green",
  "halftone-strong",
];
const TILTS = [
  "-rotate-1",
  "rotate-1",
  "-rotate-[0.6deg]",
  "rotate-[0.6deg]",
  "-rotate-1",
  "rotate-1",
];

export default function Page() {
  return (
    <main>
      <IssueHeader issue="Issue 05" title="The people" no="No. 5" />

      <ScrollReveal as="section" className="border-b border-gaip-black">
        <div className="mx-auto max-w-editorial px-6 py-20 md:py-28">
          <p className="eyebrow text-gaip-teal">TEAM</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-gaip-black md:text-6xl">
            The people.
          </h1>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-black/80 md:text-xl">
            A small team that teaches businesses to do this themselves, which
            tells you most of what you need to know about us.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="comic-flood-teal">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(({ name, role, initials, note }, i) => (
              <div
                key={name}
                className={`comic-panel-bold flex flex-col ${TILTS[i]}`}
              >
                <div className="relative aspect-square overflow-hidden border-b-2 border-gaip-black bg-gaip-white">
                  <div
                    aria-hidden="true"
                    className={`${PHOTO_BG[i % PHOTO_BG.length]} absolute inset-0`}
                  />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                    <span className="font-display text-5xl font-semibold text-gaip-black">
                      {initials}
                    </span>
                    <span className="eyebrow text-gaip-black/60">
                      Photo to come
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <h2 className="font-display text-xl font-semibold text-gaip-black">
                    {name}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-gaip-black/70">
                    {role}
                  </p>
                  {note && (
                    <p className="mt-3 font-body text-sm text-gaip-black/80">
                      {note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Claude celebrating the team, after the grid. Warm cream/charcoal
          clay-world card, decorative, no new copy. */}
      <ScrollReveal as="section">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-20">
          <div className="flex justify-center">
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
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="border-t border-gaip-black">
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
