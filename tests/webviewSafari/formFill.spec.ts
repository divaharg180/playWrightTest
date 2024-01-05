import { test } from "@playwright/test";
import LoginPage from "../../pageObjects/loginPage";
const { webkit } = require('playwright')

const capabilities = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    "platformName": "macOs Big Sur",
    "platformVersion": "118",
        "build": "Playwright Safari Build - 3",
        'name': 'form fill details',
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

test("form fill details", async () => {
    device = await webkit.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities))}`,
      );
    
    
    
    
      context = await device.newContext();
      page = await context.newPage();
    const loginPage = new LoginPage(page);


    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Input Form Submit"`).click();

    await loginPage.enterDetailsPage(`//*[@placeholder="Name"]`, "Divahar");
    await loginPage.enterDetailsPage(`//*[text()="Input form validations"]/following::*[@type="email"]`, "divahar@iterasolutions.co.in");
    await loginPage.enterDetailsPage(`//*[@placeholder="Password"]`, "Diva1234");
    await loginPage.enterDetailsPage(`//*[@placeholder="Company"]`, "company");
    await loginPage.enterDetailsPage(`//*[@placeholder="Website"]`, "www.google.com");

    await loginPage.enterDetailsPage(`//*[@placeholder="City"]`, "erode");
    await loginPage.enterDetailsPage(`//*[@placeholder="Address 1"]`, "Address 1");
    await loginPage.enterDetailsPage(`//*[@placeholder="Address 2"]`, "Address 2");
    await loginPage.enterDetailsPage(`//*[@placeholder="State"]`, "State");
    await loginPage.enterDetailsPage(`//*[@placeholder="Zip code"]`, "60044");

    await page.close();
    await context.close();
    await device.close();
})