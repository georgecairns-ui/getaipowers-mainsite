import { test, expect } from "@playwright/test";

test.describe("Contact page", () => {
  test("embeds the Calendly booking iframe", async ({ page }) => {
    await page.goto("/contact");

    const iframe = page.locator(
      'iframe[src*="calendly.com/george-cairns-getaipowers"]',
    );

    await expect(iframe).toHaveCount(1);
    await expect(iframe).toBeVisible();
  });
});
