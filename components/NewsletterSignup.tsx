"use client";

import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NewsletterSignupProps {
  /** Colour context. 'dark' sits on black, 'light' sits on white. */
  variant?: "dark" | "light";
  /** data-testid on the form element. */
  testId?: string;
}

/**
 * NewsletterSignup
 *
 * Reusable newsletter capture. Mirrors the Footer form's validation and
 * success behaviour so the whole site behaves consistently. Not yet wired
 * to a platform: it validates client-side and shows the success state.
 */
export default function NewsletterSignup({
  variant = "dark",
  testId = "newsletter-form-section",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

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

  const headingColour = isDark ? "text-gaip-white" : "text-gaip-black";
  const bodyColour = isDark ? "text-gaip-white/80" : "text-gaip-black/70";
  const inputColour = isDark
    ? "bg-transparent border-gaip-white text-gaip-white placeholder:text-gaip-white/60"
    : "bg-gaip-white border-gaip-black text-gaip-black placeholder:text-gaip-black/50";
  const fieldId = `${testId}-email`;

  return (
    <div>
      <h2 className={`font-display text-3xl leading-snug sm:text-4xl ${headingColour}`}>
        Claude tips that get you off the computer.
      </h2>
      <p className={`mt-3 max-w-prose font-body text-base ${bodyColour}`}>
        Real ways to use Claude in your job, straight to your inbox.
      </p>

      {submitted ? (
        <p className="mt-6 font-body text-sm text-gaip-teal">
          You&rsquo;re in. Speak soon.
        </p>
      ) : (
        <form
          data-testid={testId}
          onSubmit={handleSubmit}
          noValidate
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor={fieldId} className="sr-only">
            Email address
          </label>
          <input
            id={fieldId}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError(false);
            }}
            placeholder="Your email address"
            className={`w-full border px-4 py-3 font-body text-sm focus:border-gaip-teal focus:outline-none ${inputColour}`}
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
  );
}
