import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * PullQuote
 *
 * A single, large editorial pull-quote on white. The whole business, stated
 * plainly.
 */
export default function PullQuote() {
  return (
    <section className="bg-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <ScrollReveal>
          <p className="pull-quote max-w-4xl text-3xl leading-tight text-gaip-black sm:text-4xl lg:text-5xl">
            We get people off the computer. That&rsquo;s not a tagline.
            That&rsquo;s the whole business.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
