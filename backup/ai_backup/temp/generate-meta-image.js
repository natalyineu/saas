const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 }
  });
  const page = await context.newPage();

  // Load the HTML file
  const htmlPath = path.join(__dirname, 'meta-image.html');
  await page.goto(`file://${htmlPath}`);

  // Wait for any fonts to load
  await page.waitForTimeout(1000);

  // Take a screenshot
  await page.screenshot({
    path: path.join(__dirname, '..', 'public', 'og-image.jpg'),
    type: 'jpeg',
    quality: 90
  });

  console.log('Meta image generated successfully!');
  await browser.close();
})().catch(err => {
  console.error('Error generating meta image:', err);
  process.exit(1);
}); 