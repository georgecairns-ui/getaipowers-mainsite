"use client";

import { useEffect, useState } from "react";
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

/**
 * Nav
 *
 * Sticky editorial top navigation. Desktop shows the logo, links and a
 * CTA in one row. Below the lg breakpoint the links collapse behind a
 * hamburger that opens a full-screen overlay.
 */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-gaip-black bg-gaip-white">
      <div className="mx-auto flex h-20 max-w-editorial items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/assets/logo/GAIP-logo-black-teal-pop-RGB.svg"
            alt="Get AI Powers"
            width={160}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-gaip-black decoration-gaip-teal decoration-2 underline-offset-4 transition-colors duration-200 hover:text-gaip-teal hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden bg-gaip-black px-5 py-3 font-body text-sm text-gaip-white transition-colors duration-200 hover:bg-gaip-teal lg:inline-block"
        >
          Book a Claude Readiness Session
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-gaip-black transition-transform duration-200 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gaip-black transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gaip-black transition-transform duration-200 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-6 bg-gaip-white px-6 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl text-gaip-black transition-colors duration-200 hover:text-gaip-teal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-gaip-black px-6 py-4 font-body text-base text-gaip-white transition-colors duration-200 hover:bg-gaip-teal"
            >
              Book a Claude Readiness Session
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
