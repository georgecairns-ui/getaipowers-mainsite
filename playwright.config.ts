import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for the Get AI Powers website.
 *
 * Runs against a production build on port 3222 so it never collides with
 * the reference dev server that may already be running on 3111.
 */
export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3222",
  },
  webServer: {
    command: "npm run start -- -p 3222",
    url: "http://localhost:3222",
    reuseExistingServer: true,
    timeout: 60000,
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
      testIgnore: /.*\.mobile\.spec\.ts$/,
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 390, height: 844 } },
      testMatch: /.*\.mobile\.spec\.ts/,
    },
  ],
});
