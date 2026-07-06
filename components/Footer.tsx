"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/claude-cofounder", label: "Claude Co-Founder" },
  { href: "/services", label: "Our Services" },
  { href: "/results", label: "Results" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Footer
 *
 * Black, editorial, appears on every page. Carries the newsletter
 * signup that is shared across the whole site.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !EMAIL_PATTERN.test(email.trim())) {
      setError(true);
      return;
    }

    setError(false);
    // TODO: wire to the newsletter platform once George confirms which service it runs on
    setSubmitted(true);
  }

  return (
    <footer className="border-t border-gaip-white bg-gaip-black text-gaip-white">
      <div className="mx-auto max-w-editorial px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <Image
              src="/assets/logo/GAIP-logo-white-teal-pop-RGB.svg"
              alt="Get AI Powers"
              width={176}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-prose font-display text-2xl leading-snug">
              We get people off the computer.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-gaip-white transition-colors duration-200 hover:text-gaip-teal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div>
            <h2 className="font-display text-2xl leading-snug">
              Claude tips that get you off the computer.
            </h2>
            <p className="mt-3 font-body text-sm text-gaip-white/80">
              Real ways to use Claude in your job, straight to your inbox.
            </p>

            {submitted ? (
              <p className="mt-6 font-body text-sm text-gaip-teal">
                You&rsquo;re in. Speak soon.
              </p>
            ) : (
              <form
                data-testid="newsletter-form"
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Your email address"
                  className="w-full border border-gaip-white bg-gaip-black px-4 py-3 font-body text-sm text-gaip-white placeholder:text-gaip-white/60 focus:outline-none focus:border-gaip-teal"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap bg-gaip-teal px-5 py-3 font-body text-sm text-gaip-black transition-colors duration-200 hover:bg-gaip-teal-dark"
                >
                  Subscribe
                </button>
              </form>
            )}

            {error && (
              <p className="mt-2 font-body text-xs text-gaip-teal">
                Enter a valid email address.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-gaip-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-gaip-white/70">
            Get AI Powers Ltd. Registered in the UK. &copy;{" "}
            {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-gaip-teal">
            GETAIPOWERS.COM
          </p>
        </div>
      </div>
    </footer>
  );
}
