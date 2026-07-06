import { test, expect } from "@playwright/test";

test.describe("Footer newsletter form", () => {
  test("rejects an invalid email and accepts a valid one", async ({
    page,
  }) => {
    await page.goto("/");

    const form = page.getByTestId("newsletter-form");
    const emailInput = form.locator('input[type="email"]');
    const submitButton = form.getByRole("button", { name: "Subscribe" });

    await emailInput.fill("not-an-email");
    await submitButton.click();
    // The error message renders as a sibling of the form, not inside it.
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();

    await emailInput.fill("george@example.com");
    await submitButton.click();

    await expect(page.getByTestId("newsletter-form")).toHaveCount(0);
    await expect(page.getByText(/You.re in\. Speak soon\./)).toBeVisible();
  });
});
