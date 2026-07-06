import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  BrainIcon,
  LightningIcon,
  LinkIcon,
  ClockIcon,
  StarIcon,
} from "@/components/services/Icons";

export const metadata: Metadata = {
  title: "Our services - Get AI Powers",
  description:
    "1 main service: Claude Co-Founder. It's how we deliver everything, whether you're a leadership team of 40 or a business owner of 1.",
};

const DIAGNOSTICS = [
  {
    title: "No time to learn it",
    body: "People are busy. Few get past surface-level prompting.",
  },
  {
    title: "No skills built around real work",
    body: "Without skills built around your workflows, Claude just guesses.",
  },
  {
    title: "Not connected, not adopted",
    body: "Unlinked from your systems, it becomes a faster ChatGPT for 2 enthusiasts.",
  },
];

const DELIVERY = [
  {
    title: "A one-off setup",
    body: "We configure your Claude environment, teach it who your business is, and lay the foundations of your skills library.",
    Icon: LightningIcon,
  },
  {
    title: "Weekly group coaching",
    body: "Pods of 3, grouped by function, so every example is relevant to the person in the room.",
    Icon: ClockIcon,
  },
  {
    title: "Fortnightly 1-to-1 coaching",
    body: "Personalised to each person's role and the workflows that eat their week.",
    Icon: LinkIcon,
  },
  {
    title: "Homework and gamified quizzes",
    body: "Locks the learning in between sessions and shows us who your champions are.",
    Icon: StarIcon,
  },
];

const PHASES = [
  { number: "1", name: "Foundations", weeks: "Weeks 1-2" },
  { number: "2", name: "Models and Prompting", weeks: "Weeks 3-4" },
  { number: "3", name: "Chat Mastery", weeks: "Weeks 5-6" },
  { number: "4", name: "Cowork Execution", weeks: "Weeks 7-8" },
  { number: "5", name: "Skills and Connectors", weeks: "Weeks 9-10" },
  { number: "6", name: "The Claude Brain", weeks: "Weeks 11-12" },
];

const PACKAGES = [
  {
    name: "Essentials",
    tag: null,
    body: "Group-led. 2 hours of 1-to-1 coaching plus 12 hours of group coaching per person. For broad teams who need confident everyday use.",
  },
  {
    name: "Professional",
    tag: "MOST POPULAR",
    body: "The standard. 6 hours of 1-to-1 plus 12 hours of group coaching per person, with role-specific workflows and skills built around your work.",
  },
  {
    name: "Executive",
    tag: null,
    body: "1-to-1 heavy. 12 hours of 1-to-1 plus 12 hours of group coaching per person, for senior leaders who want deep, bespoke automation.",
  },
];

const OUTCOMES = [
  "Confident daily use, not 2 enthusiasts and 10 who tried it once.",
  "A skills library that's yours, built around your workflows and improving with use.",
  "1 or 2 internal champions who can coach the next wave without us.",
  "Leaders back to leading, because Claude has taken the repetitive work.",
];

const TRACK_RECORD = [
  {
    value: "34",
    caption:
      "users across 5 teams at a London asset manager, including a regulated compliance function, onboarded in a single rollout.",
  },
  {
    value: "12",
    caption:
      "senior leaders in a healthcare business, taken from ad-hoc use to confident daily use with their own skills library.",
  },
  {
    value: "3",
    caption:
      "role-specific workflows built for a recruitment firm: lead research, outreach and day-to-day delivery.",
  },
];

export default function Page() {
  return (
    <main>
      {/* Header */}
      <ScrollReveal as="section" className="border-b border-gaip-black">
        <div className="mx-auto max-w-editorial px-6 py-20 md:py-28">
          <p className="eyebrow text-gaip-black/60">OUR SERVICES</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-gaip-black md:text-6xl">
            Our services.
          </h1>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-black/80 md:text-xl">
            1 main service: Claude Co-Founder. It&rsquo;s how we deliver
            everything, whether you&rsquo;re a leadership team of 40 or a
            business owner of 1. We don&rsquo;t install software. We change
            how you work.
          </p>
        </div>
      </ScrollReveal>

      {/* Why teams need it */}
      <ScrollReveal as="section" className="bg-gaip-black text-gaip-white">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Why teams need it.
          </h2>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-white/80 md:text-xl">
            Most teams capture 10 to 20% of Claude&rsquo;s value after buying
            licences.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {DIAGNOSTICS.map(({ title, body }) => (
              <div
                key={title}
                className="border-t-2 border-gaip-white/30 pt-4"
              >
                <h3 className="font-display text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2 font-body text-base text-gaip-white/70">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Claude Co-Founder for teams */}
      <ScrollReveal as="section">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <p className="eyebrow text-gaip-black/60">FOR TEAMS</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-gaip-black md:text-4xl">
            Claude Co-Founder for teams.
          </h2>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-black/80 md:text-xl">
            A 12-week, fully virtual coaching programme that takes your
            company from owning Claude licences to using Claude well every
            day, and leaves you able to keep going without us.
          </p>

          {/* How it's delivered */}
          <p className="eyebrow mt-16 text-gaip-black/60">
            How it&rsquo;s delivered
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERY.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-3 border-t-2 border-gaip-black pt-4"
              >
                <Icon className="h-8 w-8 text-gaip-teal" />
                <span className="font-display text-lg font-semibold text-gaip-black">
                  {title}
                </span>
                <span className="font-body text-sm text-gaip-black/70">
                  {body}
                </span>
              </div>
            ))}
          </div>

          {/* 6-phase framework */}
          <p className="eyebrow mt-16 text-gaip-black/60">
            The 12-week framework
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PHASES.map(({ number, name, weeks }) => (
              <div key={number} className="comic-panel flex flex-col gap-3 p-4">
                <span className="font-mono text-xs text-gaip-black/50">
                  {number.padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold leading-snug text-gaip-black">
                  {name}
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-gaip-black/50">
                  {weeks}
                </span>
              </div>
            ))}
          </div>

          {/* Claude Brain callout */}
          <div className="comic-panel comic-panel--teal mt-8 p-8">
            <BrainIcon className="h-10 w-10 text-gaip-teal" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-gaip-black">
              The Claude Brain.
            </h3>
            <p className="mt-4 max-w-prose font-body text-base text-gaip-black/80">
              Everything your team builds is collected into one skills
              library, built around your real workflows. Owned by you, stored
              with you, improving every time you use it. That&rsquo;s the
              asset you keep when the 12 weeks end.
            </p>
          </div>

          {/* Packages */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PACKAGES.map(({ name, tag, body }) => (
              <div
                key={name}
                className="comic-panel flex flex-col gap-4 p-8"
              >
                {tag && (
                  <span className="self-start border border-gaip-teal px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gaip-black">
                    {tag}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-gaip-black">
                  {name}
                </h3>
                <p className="font-body text-base text-gaip-black/80">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-prose font-body text-sm text-gaip-black/60">
            Pricing is per person and proposed after the audit, because value
            comes before price. Claude licences are billed separately by
            Anthropic and stay your responsibility.
          </p>

          {/* Outcomes */}
          <h3 className="mt-16 font-display text-2xl font-semibold text-gaip-black">
            What done looks like.
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {OUTCOMES.map((body) => (
              <div key={body} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 flex-shrink-0 bg-gaip-teal"
                />
                <p className="font-body text-base text-gaip-black/80">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* ROI pull quote */}
          <blockquote className="pull-quote mt-16 max-w-prose text-2xl text-gaip-black md:text-3xl">
            The conservative maths: 3 hours saved per person per week, valued
            at £40 an hour, is £5,520 back per person every year. For a team
            of 10, that&rsquo;s £55,200 a year.
          </blockquote>
        </div>
      </ScrollReveal>

      {/* Community (warmth zone) */}
      <ScrollReveal
        as="section"
        className="bg-cofounder-cream text-cofounder-charcoal"
      >
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <p className="eyebrow text-cofounder-ink-soft">FOR INDIVIDUALS</p>
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
            The Claude Co-Founder Community.
          </h2>
          <p className="mt-6 max-w-prose font-body text-lg text-cofounder-ink-soft md:text-xl">
            The same capability without the company-wide programme, for
            business owners, solo operators and small teams. Lessons, live
            support and a place to keep learning as Claude keeps changing.
            There&rsquo;s a free tier to start, and unlimited membership is
            £100 a month. The first step is a free 30-minute Claude Audit
            call.
          </p>
          <Link
            href="/claude-cofounder"
            className="mt-8 inline-block bg-cofounder-clay px-6 py-4 font-body text-base text-cofounder-cream transition-colors duration-200 hover:bg-cofounder-clay-deep"
          >
            Meet Claude Co-Founder
          </Link>
        </div>
      </ScrollReveal>

      {/* Track record */}
      <ScrollReveal as="section">
        <div className="mx-auto max-w-editorial px-6 py-16 md:py-24">
          <p className="eyebrow text-gaip-black/60">TRACK RECORD</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRACK_RECORD.map(({ value, caption }) => (
              <div
                key={value}
                className="comic-panel flex flex-col gap-4 p-8"
              >
                <span className="font-display text-6xl font-bold leading-none text-gaip-black md:text-7xl">
                  {value}
                </span>
                <p className="font-body text-base text-gaip-black/80">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Close CTA */}
      <ScrollReveal as="section" className="bg-gaip-black text-gaip-white">
        <div className="mx-auto max-w-editorial px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Start with the audit.
          </h2>
          <p className="mt-6 max-w-prose font-body text-lg text-gaip-white/80 md:text-xl">
            The first call is a free audit of how your team uses Claude
            today: where the time goes, and where the hours are hiding.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-gaip-white px-8 py-4 font-body text-base text-gaip-black transition-colors duration-200 hover:bg-gaip-teal hover:text-gaip-white"
          >
            Book a Claude Readiness Session
          </Link>
        </div>
      </ScrollReveal>
    </main>
  );
}
