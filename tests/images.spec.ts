import { test, expect } from "@playwright/test";
import { ROUTES, scrollFullPage } from "./helpers";

test.describe("No broken images", () => {
  for (const route of ROUTES) {
    test(`every image on ${route} loads successfully`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });

      // Scroll the full page so lazy-loaded images start fetching.
      await scrollFullPage(page);

      const brokenImages = await page.evaluate(() =>
        Array.from(document.querySelectorAll("img"))
          .filter((img) => img.naturalWidth === 0)
          .map((img) => img.src),
      );

      expect(brokenImages).toEqual([]);
    });
  }
});
