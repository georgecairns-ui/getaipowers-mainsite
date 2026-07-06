import { test, expect } from "@playwright/test";

const OVERLAY_SELECTOR = '[data-testid="page-transition-overlay"]';

test.describe("Page transition", () => {
  test.use({ contextOptions: { reducedMotion: "no-preference" } });

  test("navigating via the nav plays the comic-panel overlay", async ({
    page,
  }) => {
    await page.goto("/");

    const overlay = page.locator(OVERLAY_SELECTOR);
    await expect(overlay).toHaveCount(1);
    await expect(overlay.locator("> div")).toHaveCount(5);

    await page
      .locator("header nav")
      .getByRole("link", { name: "About", exact: true })
      .click();

    // Tolerant of timing: poll for up to 2 seconds for at least 1 panel to
    // become visible while the transition plays.
    await page.waitForFunction(
      (selector) => {
        const el = document.querySelector(selector);
        if (!el) return false;
        return Array.from(el.children).some(
          (panel) => window.getComputedStyle(panel).visibility === "visible",
        );
      },
      OVERLAY_SELECTOR,
      { timeout: 2000 },
    );

    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator("h1").first()).toBeVisible();
  });
});
