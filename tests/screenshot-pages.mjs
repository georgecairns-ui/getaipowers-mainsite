import { chromium } from "@playwright/test";

const BASE = "http://localhost:3111";
const OUT = process.argv[2] || ".";
const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["cofounder", "/claude-cofounder"],
  ["services", "/services"],
  ["results", "/results"],
  ["team", "/team"],
  ["contact", "/contact"],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
for (const [name, path] of pages) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  // force reveal animations by scrolling through the page
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
}
// mobile home
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const mp = await mctx.newPage();
await mp.goto(BASE + "/", { waitUntil: "networkidle" });
await mp.waitForTimeout(1000);
await mp.screenshot({ path: `${OUT}/home-mobile.png`, fullPage: true });
await browser.close();
console.log("done");
