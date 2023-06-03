import puppeteer from "puppeteer";
import addBasicInformation from "./navigation/addBasicInformation";
import sendWhatsappMessage from "./messaging";
import { vitacuraUrl } from "./config/environmentVariables";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto(vitacuraUrl);

    const rut = "189325673";
    const birthDate = "14081994";

    await addBasicInformation(page, rut, birthDate);
  } catch (error: any) {
    console.error(error);
    browser.close();
  }
})();
