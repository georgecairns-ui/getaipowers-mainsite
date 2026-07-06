import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await page.goto("http://localhost:3111/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: /open menu/i }).click();
await page.waitForTimeout(1400);
await page.screenshot({ path: process.argv[2] + "/menu-open.png" });
await browser.close();
console.log("done");
