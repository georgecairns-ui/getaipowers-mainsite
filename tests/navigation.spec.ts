import { test, expect } from "@playwright/test";

const NAV_LINKS = [
  { label: "About", path: "/about" },
  { label: "Claude Co-Founder", path: "/claude-cofounder" },
  { label: "Our Services", path: "/services" },
  { label: "Results", path: "/results" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

test.describe("Primary navigation", () => {
  for (const { label, path } of NAV_LINKS) {
    test(`clicking "${label}" in the nav goes to ${path}`, async ({ page }) => {
      await page.goto("/");

      await page
        .locator("header nav")
        .getByRole("link", { name: label, exact: true })
        .click();

      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.locator("h1").first()).toBeVisible();
    });
  }

  test('the nav CTA "Book a Claude Readiness Session" leads to /contact', async ({
    page,
  }) => {
    await page.goto("/");

    await page
      .locator("header")
      .getByRole("link", { name: "Book a Claude Readiness Session" })
      .click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator("h1").first()).toBeVisible();
  });
});
