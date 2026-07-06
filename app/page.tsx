import Hero from "@/components/home/Hero";
import AuthorityStrip from "@/components/home/AuthorityStrip";
import Philosophy from "@/components/home/Philosophy";
import PullQuote from "@/components/home/PullQuote";
import CofounderPanel from "@/components/home/CofounderPanel";
import GeorgeStory from "@/components/home/GeorgeStory";
import ResultsStrip from "@/components/home/ResultsStrip";
import CloseCta from "@/components/home/CloseCta";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <AuthorityStrip />
      <Philosophy />
      <PullQuote />

      {/* Newsletter section: full-width black block, like the footer */}
      <section className="bg-gaip-black">
        <div className="mx-auto max-w-editorial px-6 py-24 lg:py-28">
          <ScrollReveal>
            <NewsletterSignup variant="dark" testId="newsletter-form-home" />
          </ScrollReveal>
        </div>
      </section>

      <CofounderPanel />
      <GeorgeStory />
      <ResultsStrip />
      <CloseCta />
    </main>
  );
}
