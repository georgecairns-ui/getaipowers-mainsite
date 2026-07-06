import { chromium } from "@playwright/test";
const browser = await chromium.launch();
for (const rm of ["no-preference", "reduce"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: rm });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") errors.push(m.type() + ": " + m.text().slice(0, 200)); });
  await page.goto("http://localhost:3111/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const res = await page.evaluate(() => {
    const el = document.querySelector("#philosophy p");
    const wrapper = el ? el.parentElement : null;
    return {
      matches: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      philosophyText: el ? el.textContent.slice(0, 40) : "NOT FOUND",
      wrapperOpacity: wrapper ? getComputedStyle(wrapper).opacity : "n/a",
      wrapperStyleAttr: wrapper ? wrapper.getAttribute("style") : "n/a",
    };
  });
  // scroll to philosophy and re-check
  await page.evaluate(() => document.querySelector("#philosophy").scrollIntoView({ behavior: "instant", block: "center" }));
  await page.waitForTimeout(1200);
  const after = await page.evaluate(() => {
    const wrapper = document.querySelector("#philosophy p")?.parentElement;
    return wrapper ? getComputedStyle(wrapper).opacity : "n/a";
  });
  console.log(rm, JSON.stringify(res), "afterScroll:", after, "consoleIssues:", errors.slice(0, 4));
  await ctx.close();
}
await browser.close();
