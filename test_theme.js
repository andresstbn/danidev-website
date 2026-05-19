import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  // Listen for console events
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:3000');
  await page.waitForSelector('button[aria-label="Toggle theme"]');
  
  console.log('Got page. Clicking toggle...');
  await page.click('button[aria-label="Toggle theme"]');
  
  // Wait a bit
  await new Promise(r => setTimeout(r, 1000));
  
  // Check body color
  const bgColor = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const color = await page.evaluate(() => getComputedStyle(document.body).color);
  
  console.log('Background:', bgColor);
  console.log('Color:', color);
  
  const innerText = await page.evaluate(() => document.body.innerText);
  console.log('Body Text Length:', innerText.length);
  if (innerText.length === 0) {
    console.log('DOM is empty! Checking body HTML...');
    const bodyHtml = await page.evaluate(() => document.body.innerHTML);
    console.log('Body HTML:', bodyHtml.slice(0, 200));
  }
  
  await browser.close();
})();
