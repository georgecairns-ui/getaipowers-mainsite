import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3111/", { waitUntil: "networkidle" });
await page.mouse.move(400, 350);
await page.waitForTimeout(1500);
await page.screenshot({ path: process.argv[2] + "/hero-bubble.png" });
await browser.close();
console.log("done");
