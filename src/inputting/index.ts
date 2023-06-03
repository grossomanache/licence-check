import { Page } from "puppeteer";

const inputTextOnField = async (
  page: Page,
  nodeType: string,
  textToBeInputted: string,
  options?: {
    combinator?: string;
    delay?: number;
  }
) => {
  const combinator = options?.combinator || "";

  const selector = `${nodeType}${combinator}`;
  const node = await page.waitForSelector(selector);

  if (!node) {
    throw new Error(`Node with selector ${selector} not found`);
  }

  await node.type(textToBeInputted, {
    delay: options?.delay || 0,
  });
};

export default inputTextOnField;
