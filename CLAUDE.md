# What this project is

The Get AI Powers agency website: a premium editorial magazine site with comic accents for the UK Claude training company. Not yet deployed; deployment target is Vercel via a GitHub repo George will provide.

# Stack

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 (tokens in `tailwind.config.ts`, loaded through `@config` in `app/globals.css`)
- TypeScript is deliberate for this project; George's build brief specified it.
- Framer Motion (scroll reveals), GSAP (page transitions, panel choreography), Lenis (smooth scroll)
- Playwright for tests
- Hosting: Vercel (pending repo connection)

# Commands

- Run locally: `npm run dev`
- Test: `npx playwright test`
- Lint: `npm run lint`
- Build: `npm run build`
- Deploy: push to main once the GitHub repo is connected in Vercel (auto-deploy).

# Rules for this repo

- Where things live: pages in `app/<route>/page.tsx`, shared components in `components/`, small reusable devices in `components/ui/`, brand assets in `public/assets/`, tests in `tests/`.
- Brand: Get AI Powers (black/white/teal) is the structure layer everywhere. The warmth layer (Claude Co-founder cream `#FAFAF7`, clay `#CC785C`, charcoal `#191919`) appears ONLY on `/claude-cofounder` and the About pivot-story panels. Action colours (red `#E63946`, blue `#3A86FF`, green `#52B788`, grey, beige) appear ONLY inside illustrations, impact bursts and hover micro-highlights - never backgrounds, nav, body text or buttons. Design skills: `gaip-design`, `gaip-brand-style`, `gaip-comic-book-design`, `claude-cofounder-design`.
- Typography: Zilla Slab (display), Inter (headings and body), JetBrains Mono (labels). Loaded via next/font in `app/layout.tsx` as CSS variables.
- Never: drop shadows, glows, gradients, bevels, 3D effects, comic-styled body typefaces.
- Copy: george-voice rules. British English, no em dashes, digits for numbers, never the acronym "GAIP" in user-visible text, no grouping ideas into threes, no swearing anywhere on the site.
- Raise errors explicitly; no silent fallbacks.
- Git: feature branches named `claude/<descriptive-name>`, focused commits, clear messages. No secrets, no build artifacts.
- Never delete files. Move to `~/Claude/99_Archive` and ask George first.

# Gotchas

- Tailwind here is v4: there is no PostCSS-era config auto-load. `tailwind.config.ts` only applies because `app/globals.css` contains `@config "../tailwind.config.ts"`. Keep both in sync.
- `@studio-freight/lenis` is the installed package name (deprecated upstream in favour of `lenis`, kept as specified in the build brief).
- Missing assets awaiting George (build against placeholder slots, never generate substitutes): Higgsfield superhero-reveal renders, hero loop video, starburst impact animation, panel-transition wipe, About four-panel illustrated sequence, lightning bolt and pixel mark emblems, George's speaking video.
- 2 placeholder statistics on the results strip are flagged in-page and must be confirmed by George before launch.
- Anthropic partner/certification badge wording must be confirmed by George before anything ships (per gaip-service-offering skill).
