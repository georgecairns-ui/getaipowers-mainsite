import type { Metadata } from "next";
import Image from "next/image";
import IssueHeader from "@/components/ui/IssueHeader";

export const metadata: Metadata = {
  title: "Contact - Get AI Powers",
  description:
    "Book a 30-minute Claude Quick Wins Session with George Cairns to find where Claude can hand your team its hours back.",
};

/**
 * Contact page.
 *
 * Its only job is converting: structure palette (white / black / teal),
 * minimal animation, no heavy assets, fast load. No ScrollReveal, no
 * Starburst.
 */
export default function Page() {
  return (
    <main className="bg-gaip-white text-gaip-black">
      <IssueHeader
        issue="Issue 06"
        title="Book a Claude Quick Wins Session"
        no="No. 6"
      />
      <section className="mx-auto max-w-editorial px-6 py-16 sm:py-20">
        <div className="flex items-center gap-4">
          <div>
            <p className="eyebrow text-gaip-black">Contact</p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Book a Claude Quick Wins Session.
            </h1>
          </div>
          {/* Small welcome accent, no animation, so the page stays fast. */}
          <div className="w-16 shrink-0 rounded-2xl border-2 border-cofounder-charcoal bg-cofounder-cream p-1.5 sm:w-20">
            <Image
              src="/assets/claymation/claude-character-welcome.png"
              alt="Claude character waving hello, welcoming you in"
              width={160}
              height={160}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="benday-duo mt-6 h-3 w-full max-w-prose"
        />
        <p className="mt-6 max-w-prose font-body text-lg text-gaip-black/80">
          30 minutes with George. We&rsquo;ll look at where Claude can hand
          your team its hours back, because that&rsquo;s the quickest way
          to find out if we can help.
        </p>

        {/* EVENT SWAP POINT: this embeds the Calendly "Claude - Quick Wins" 30-min event.
            If George creates a dedicated Claude Readiness Session event type later,
            change the iframe src slug below and relabel the CTAs site-wide. */}
        <div className="mt-10 border border-gaip-black">
          <iframe
            src="https://calendly.com/george-cairns-getaipowers/claude-quick-wins?hide_gdpr_banner=1"
            title="Book a Claude Quick Wins Session with George Cairns"
            width="100%"
            style={{ minHeight: "760px", border: "none", display: "block" }}
            loading="lazy"
          />
        </div>

        <p className="mt-6 font-body text-sm text-gaip-black/70">
          Prefer email?{" "}
          <a
            href="mailto:george.cairns@getaipowers.com"
            className="text-gaip-black underline decoration-gaip-teal decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-gaip-teal-dark"
          >
            george.cairns@getaipowers.com
          </a>
        </p>
      </section>
    </main>
  );
}
