import { test, expect } from "@playwright/test";

test.describe("Mobile rendering", () => {
  test("home renders with a visible h1 and no horizontal overflow", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("h1").first()).toBeVisible();

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));

    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.viewportWidth + 1);
  });

  test("hamburger opens the overlay menu and About navigates", async ({
    page,
  }) => {
    await page.goto("/");

    // Match on "menu" rather than "open menu": the accessible name flips to
    // "Close menu" once opened, so a name locked to "open" would go stale.
    const hamburger = page.getByRole("button", { name: /menu/i });
    await expect(hamburger).toBeVisible();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");

    // Scope to the header: the footer carries its own always-visible "About"
    // link, so we filter to whichever is actually visible inside the header
    // (the desktop inline nav link stays display:none at this width).
    const aboutLink = page
      .locator("header")
      .locator("a:visible", { hasText: /^About$/ });
    await expect(aboutLink).toBeVisible();

    await aboutLink.click();

    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator("h1").first()).toBeVisible();
  });
});
