const puppeteer = require('puppeteer');
const path = require('path');

const sleep = ms => new Promise(res => setTimeout(res, ms));
const downloadPath = path.resolve('./downloads');
const dropdownSelector = '#cmb_estado';

async function downloadFiles() {

    const browser = await puppeteer.launch({ headless: true });
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
    const page = await browser.newPage();
    await page.setUserAgent(ua);
    const client = await page.target().createCDPSession()
    // Set download behavior
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath,
    });

    await page.goto('https://venda-imoveis.caixa.gov.br/sistema/download-lista.asp', { waitUntil: 'domcontentloaded' });

    const options = await page.$$(dropdownSelector + ' option');

    for (const option of options) {
        const value = await page.evaluate(el => el.value, option);
        if (value !== 'Selecione') {
            console.log(value);
            // Select option
            await page.select(dropdownSelector, value);
            await sleep(1000)

            // Click the download button
            await page.click('#btn_next1');
            await sleep(1000)
        };
    }

    await browser.close();
}

downloadFiles();
