import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
await page.goto("http://localhost:3111/services", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: process.argv[2] + "/services-v2.png", fullPage: true });
await browser.close();
console.log("done");
