import { test, expect } from '@playwright/test';
import LoginPage from "../../pageObjects/loginPage";
const { webkit } = require('playwright')

const capabilities = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    "platformName": "macOs Big Sur",
    "platformVersion": "118",
        "build": "Playwright Safari Build - 2",
        'name': 'dropDown select',
        "user": `divaharg180`,
        "accessKey": `mmzqxJPCZdw78OehLdx4q0fLuv3STae3T7sqmIQC3q1s20IB6w`,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '', // Optional
        'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    }
}

let context: any;
let page: any;
let device: any;
test("dropDown select", async () => {
    device = await webkit.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities))}`,
      );
    
    
    
    
      context = await device.newContext();
      page = await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="JQuery Select dropdown"`).click();
    await selectCountry(1, `//*[@id="select2-country-results"]`, "India")
    await page.waitForTimeout(5000);


    await page.close();
    await context.close();
    await device.close();

    async function selectCountry(selectIndex, xpathSelector, countryName) {
        await page.click(`(//*[@role="combobox"])[${selectIndex}]`);
        await page.locator(`${xpathSelector}`).locator("li", { hasText: countryName }).click()
    }

})