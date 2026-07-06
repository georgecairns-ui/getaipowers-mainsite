import type { Config } from "tailwindcss";

/**
 * Get AI Powers - design tokens.
 *
 * Three-layer colour discipline (do not break it):
 *  1. STRUCTURE (gaip.*)     - backgrounds, nav, body text, buttons, panel borders. Always.
 *  2. WARMTH (cofounder.*)   - the /claude-cofounder page and the About pivot-story section ONLY.
 *  3. ACTION (action.*)      - inside illustrations, impact bursts, hover micro-highlights ONLY.
 *                              Never backgrounds, nav, body text, or buttons.
 *
 * All values confirmed against the brand skill files (gaip-brand-style, gaip-design,
 * claude-cofounder-design, gaip-comic-book-design). No invented colours.
 */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Layer 1: STRUCTURE (Get AI Powers anchor)
        gaip: {
          black: "#000000",
          white: "#FFFFFF",
          teal: "#00B0BE",
          "teal-dark": "#008C97",
          "teal-light": "#E6F7F8",
        },
        // Layer 2: WARMTH (Claude Co-Founder zones only)
        cofounder: {
          cream: "#FAFAF7",
          paper: "#F0F0EB",
          sand: "#EBDBBC",
          clay: "#CC785C",
          "clay-deep": "#A85842",
          charcoal: "#191919",
          "ink-soft": "#40403E",
        },
        // Layer 3: ACTION - George's 2026-07-06 direction: full comic colour.
        // Yellows, oranges and greens joined the palette and action colours
        // may now flood panels and section backdrops, not just devices. The
        // discipline that remains: black linework and gutters frame all of it.
        action: {
          red: "#E63946",
          blue: "#3A86FF",
          green: "#52B788",
          yellow: "#FFC72C",
          orange: "#FF7A2F",
          grey: "#6C757D",
          beige: "#F5E6D3",
        },
      },
      fontFamily: {
        display: ["var(--font-zilla)", "Georgia", "serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Consolas", "monospace"],
      },
      maxWidth: {
        editorial: "72rem",
        prose: "42rem",
      },
      transitionTimingFunction: {
        settle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
} satisfies Config;
