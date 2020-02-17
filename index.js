const playwright = require('playwright').chromium;
const URL = require('url').URL;
const fs = require('fs');
const path = require('path');

const url = 'https://google.com'

// Get a list of the urls to screenshot
async function screenshot(url) {
  // Create new instance of browser and open new tab
  const browser = await playwright.launch();
  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url);
    await page.screenshot({ path: 'example.png' });
    
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
}

screenshot(url);