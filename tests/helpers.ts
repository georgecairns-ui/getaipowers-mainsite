import type { Page } from "@playwright/test";

/**
 * Every top-level route the site publishes. Shared by the specs that need
 * to loop over the full set of pages.
 */
export const ROUTES = [
  "/",
  "/about",
  "/claude-cofounder",
  "/services",
  "/results",
  "/team",
  "/contact",
] as const;

/**
 * Scrolls the page to the bottom in small steps so that lazy-loaded
 * (non-priority) next/image images have a chance to start loading before
 * we inspect naturalWidth.
 */
export async function scrollFullPage(page: Page) {
  await page.evaluate(async () => {
    const step = 800;
    const max = document.body.scrollHeight;
    let y = 0;
    while (y < max) {
      window.scrollTo(0, y);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, 100));
      y += step;
    }
    window.scrollTo(0, max);
    await new Promise((resolve) => setTimeout(resolve, 300));
  });
}

/**
 * True for console messages / errors that originate from the third-party
 * Calendly booking widget embedded on /contact. These are outside our
 * control and should not fail the suite.
 */
export function isCalendlyNoise(url: string, text: string) {
  return url.includes("calendly.com") || text.toLowerCase().includes("calendly");
}
