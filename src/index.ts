import puppeteer from "puppeteer";
import inputTextOnField from "./inputting";
import delayExecution from "./utils/delayExecution";
import addBasicInformation from "./navigation/addBasicInformation";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    const vitacuraUrl =
      "http://appl.smc.cl/lc/SolicitaHoras/muni/vitacura.aspx";
    await page.goto(vitacuraUrl);

    const rut = "189325673";
    const birthDate = "14081994";

    addBasicInformation(page, rut, birthDate);
  } catch (error) {
    console.log(error);
    browser.close();
  }
})();
