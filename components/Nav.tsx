"use client";

import Image from "next/image";
import Link from "next/link";
import StaggeredMenu from "@/components/StaggeredMenu";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/claude-cofounder", label: "Claude Co-Founder" },
  { href: "/services", label: "Our Services" },
  { href: "/results", label: "Results" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const MENU_ITEMS = [
  ...NAV_LINKS.map((l) => ({
    label: l.label,
    ariaLabel: `Go to ${l.label}`,
    link: l.href,
  })),
  {
    label: "Book a Session",
    ariaLabel: "Book a Claude Quick Wins Session",
    link: "/contact",
  },
];

/**
 * Nav
 *
 * Sticky editorial top navigation. Desktop shows the logo, links and a
 * CTA in one row. Below lg the links live in the StaggeredMenu: layered
 * yellow-then-teal panels staggering in from the right (React Bits,
 * vendored and brand-adapted).
 */
export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gaip-black bg-gaip-white">
      <div className="mx-auto flex h-20 max-w-editorial items-center justify-between px-6">
        <Link href="/" className="group relative z-50 flex items-center">
          {/* The emblem grows dramatically on hover so people can actually
              see it. Transform only - no layout shift. */}
          <Image
            src="/assets/logo/GAIP-logo-black-teal-pop-RGB.svg"
            alt="Get AI Powers"
            width={160}
            height={44}
            className="h-12 w-auto origin-top-left transition-transform duration-300 ease-settle group-hover:scale-[3.2]"
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
          Book a Claude Quick Wins Session
        </Link>

        {/* Mobile: the staggered comic menu (fixed overlay, renders its own
            toggle aligned to this bar). */}
        <div className="lg:hidden">
          <StaggeredMenu
            position="right"
            items={MENU_ITEMS}
            displaySocials={false}
            displayItemNumbering={true}
            colors={["#FFC72C", "#00B0BE"]}
            accentColor="#FF7A2F"
            menuButtonColor="#000000"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={false}
            isFixed={true}
          />
        </div>
      </div>
    </header>
  );
}
