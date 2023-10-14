const {chromium} = require('playwright');
const { getFlightOffers } = require('./utils');
const { writeDBFile } = require('./utils');

const userAgentStrings = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
];

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
    });
    const page = await context.newPage();
    await page.goto('https://www.edreams.es/vuelos/palma-de-mallorca-oporto/PMI/OPO/#/');
    const FlightInfo = await page.locator('[class=discount-color]')
    text = await FlightInfo.allInnerTexts()
    const vuelos = getFlightOffers(text)
    writeDBFile(vuelos)
    browser.close();
})();
