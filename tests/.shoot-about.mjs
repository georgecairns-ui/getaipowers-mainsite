import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
await page.goto("http://localhost:3111/about", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: process.argv[2] + "/about-fixed.png", fullPage: true });
await browser.close();
console.log("done");
