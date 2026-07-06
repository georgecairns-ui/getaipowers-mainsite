import { test, expect } from "@playwright/test";
import { ROUTES, isCalendlyNoise } from "./helpers";

test.describe("Every page loads cleanly", () => {
  for (const route of ROUTES) {
    test(`${route} responds ok, shows an h1 and logs no console errors`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() !== "error") return;
        if (isCalendlyNoise(msg.location().url, msg.text())) return;
        consoleErrors.push(`console.error: ${msg.text()} (${msg.location().url})`);
      });

      page.on("pageerror", (err) => {
        if (isCalendlyNoise("", err.message)) return;
        consoleErrors.push(`pageerror: ${err.message}`);
      });

      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.ok()).toBeTruthy();

      await expect(page.locator("h1").first()).toBeVisible();

      // Give any late async activity (e.g. the Calendly iframe on /contact)
      // a moment to settle before checking the console log.
      await page.waitForTimeout(1000);

      expect(consoleErrors).toEqual([]);
    });
  }
});
