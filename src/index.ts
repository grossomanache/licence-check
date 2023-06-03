import puppeteer from "puppeteer";
import inputTextOnField from "./inputting";
import delayExecution from "./utils/delayExecution";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    const vitacuraUrl =
      "http://appl.smc.cl/lc/SolicitaHoras/muni/vitacura.aspx";
    await page.goto(vitacuraUrl);

    const rutId = "#ctl00_ContentPlaceHolder1_txtRut";
    const rut = "189325673";

    await inputTextOnField(page, "input", rut, { combinator: rutId });

    const birthDateId = "#ctl00_ContentPlaceHolder1_txtFechaNac";
    const birthDate = "14081994";
    const birthDateSelector = `input${birthDateId}`;

    await page.click(birthDateSelector);

    await inputTextOnField(page, "input", birthDate, {
      combinator: birthDateId,
      delay: 700,
    });

    const submitButtonId = "ctl00_ContentPlaceHolder1_btnAceptar";
    const submitButtonSelector = `input#${submitButtonId}`;

    await page.click(submitButtonSelector);

    const delay = delayExecution(1000);
    await delay;

    const alertId = "ctl00_ContentPlaceHolder1_LblMsj";
    const alertSelector = `span#${alertId}`;
    const alert = await page.waitForSelector(alertSelector);

    if (alert) {
      const errorMessage = await (
        await alert.getProperty("textContent")
      ).jsonValue();

      throw new Error(errorMessage ?? "Error");
    }

    debugger;
  } catch (error) {
    console.log(error);
    browser.close();
  }
})();
