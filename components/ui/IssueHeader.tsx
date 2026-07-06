interface IssueHeaderProps {
  /** Issue label, mono eyebrow. e.g. "Issue 01". */
  issue: string;
  /** Display title, Zilla Slab centre. e.g. "We get people off the computer". */
  title: string;
  /** Narration chip, action-yellow, right. e.g. "No. 1". */
  no: string;
}

/**
 * IssueHeader
 *
 * A slim full-width comic masthead that leads every page's main content: the
 * black ink strip that names the issue. Left carries the mono imprint, the
 * centre the Zilla Slab title, the right a small action-yellow narration chip.
 * A single tilted yellow corner accent keeps it hand-laid, not corporate.
 *
 * Server component: pure presentation, no state or effects.
 */
export default function IssueHeader({ issue, title, no }: IssueHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b-4 border-gaip-black bg-gaip-black text-gaip-white">
      {/* Tilted yellow corner accent, top-left. Decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 -top-3 h-12 w-12 rotate-45 bg-action-yellow"
      />

      <div className="mx-auto flex max-w-editorial items-center gap-4 px-6 py-5 sm:py-6">
        {/* Left: the comic imprint. Hidden on the narrowest screens so the
            title never gets crowded. */}
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-gaip-white/80 sm:inline">
          Get AI Powers Comics
        </span>

        {/* Centre: issue label + Zilla Slab title. */}
        <div className="flex min-w-0 flex-1 flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-action-yellow sm:text-sm">
            {issue}
          </span>
          <span className="truncate font-display text-xl font-bold uppercase tracking-wide text-gaip-white sm:text-3xl">
            {title}
          </span>
        </div>

        {/* Right: action-yellow narration chip, black ink text. */}
        <span className="shrink-0 -rotate-2 border-2 border-gaip-black bg-action-yellow px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide text-gaip-black">
          {no}
        </span>
      </div>
    </div>
  );
}
