import path from "path";

import { launch } from "puppeteer";

const WAIT_TIME_MS = 100;

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const downloadPath = path.resolve("./downloads");
const DROPDOWN_SELECTOR = "#cmb_estado";

async function downloadFiles() {
  const browser = await launch({ headless: true });
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
  const page = await browser.newPage();
  await page.setUserAgent(ua);
  const client = await page.target().createCDPSession();
  // Set download behavior
  await client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath,
  });

  await page.goto(
    "https://venda-imoveis.caixa.gov.br/sistema/download-lista.asp",
    { waitUntil: "domcontentloaded" }
  );

  const options = await page.$$(DROPDOWN_SELECTOR + " option");

  for (const option of options) {
    const value = await page.evaluate((el) => el.getAttribute("value"), option);
    if (value && value !== "Selecione") {
      console.log(value);
      // Select option
      await page.select(DROPDOWN_SELECTOR, value);
      await sleep(WAIT_TIME_MS);

      // Click the download button
      await page.click("#btn_next1");
      await sleep(WAIT_TIME_MS);
    }
  }

  await browser.close();
}

downloadFiles();
