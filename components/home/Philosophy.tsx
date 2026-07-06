import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Philosophy
 *
 * The black-background argument for why Claude is different. The Claude
 * character is a modest accent to the right of the text, not the focal point.
 */
export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-gaip-black text-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <ScrollReveal>
            <p className="max-w-prose font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">
              AI was supposed to give people their time back. For most
              businesses it&rsquo;s done the opposite, another screen, another
              tool between you and the people you&rsquo;re trying to help.
              Claude is different because it hands you back the hours instead of
              adding another screen of its own.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto w-full max-w-[16rem] border border-gaip-white p-3 lg:mx-0">
              <Image
                src="/assets/claymation/claude-character-thinking.png"
                alt="Claude character thinking"
                width={512}
                height={512}
                className="h-auto w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
