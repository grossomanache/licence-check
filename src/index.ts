const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const vitacuraUrl = "http://appl.smc.cl/lc/SolicitaHoras/muni/vitacura.aspx";
  await page.goto(vitacuraUrl);
  await browser.close();
})();
