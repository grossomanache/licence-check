import { Page } from "puppeteer";
import inputTextOnField from "../inputting";
import delayExecution from "../utils/delayExecution";
import sendWhatsappMessage from "../messaging";
import { debug } from "console";

const addBasicInformation = async (
  page: Page,
  rut: string,
  birthDate: string
) => {
  const rutId = "#ctl00_ContentPlaceHolder1_txtRut";
  await inputTextOnField(page, "input", rut, { combinator: rutId });

  const birthDateId = "#ctl00_ContentPlaceHolder1_txtFechaNac";
  const birthDateSelector = `input${birthDateId}`;

  await page.click(birthDateSelector);

  await inputTextOnField(page, "input", birthDate, {
    combinator: birthDateId,
    delay: 700,
  });

  const submitButtonId = "ctl00_ContentPlaceHolder1_btnAceptar";
  const submitButtonSelector = `input#${submitButtonId}`;

  await page.click(submitButtonSelector);

  await delayExecution(1000);

  const alertId = "ctl00_ContentPlaceHolder1_LblMsj";
  const alertSelector = `span#${alertId}`;
  const alert = await page.waitForSelector(alertSelector);

  if (alert) {
    const errorMessage =
      (await (await alert.getProperty("textContent")).jsonValue()) ??
      "Hours not available";

    sendWhatsappMessage(errorMessage);

    throw new Error(errorMessage);
  }
};

export default addBasicInformation;
