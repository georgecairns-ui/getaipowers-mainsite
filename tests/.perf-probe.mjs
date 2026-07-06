import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3111/" + (process.argv[2] || ""), { waitUntil: "load" });
const res = await page.evaluate(async () => {
  let longTasks = 0, longMs = 0;
  const po = new PerformanceObserver((list) => { for (const e of list.getEntries()) { longTasks++; longMs += e.duration; } });
  po.observe({ entryTypes: ["longtask"] });
  let rafCount = 0;
  const t0 = performance.now();
  const tick = () => { rafCount++; if (performance.now() - t0 < 5000) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
  await new Promise((r) => setTimeout(r, 5200));
  return { longTasks, longMs: Math.round(longMs), rafCount };
});
console.log(process.argv[2] || "home", JSON.stringify(res));
await browser.close();
