const {chromium} = require('playwright');

const userAgentStrings = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
];

(async () => {
    // Launch the Chromium browser
    const browser = await chromium.launch();
  
    // Create a new browser context with a randomly selected user agent string
    const context = await browser.newContext({
      userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
    });
  
    // Create a new page in the browser context and navigate to target URL
    const page = await context.newPage();
    await page.goto('https://www.skyscanner.es/rutas-aereas/pmi/opo/palma-de-mallorca-a-oporto.html');
    await page.screenshot({ path: `example-${Math.floor(Math.random() * 1000)}.png` });
  
    
})();