import { test, expect } from '@playwright/test';
import LoginPage from "../../pageObjects/loginPage";
const { webkit } = require('playwright')

const capabilities = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    "platformName": "macOs Big Sur",
    "platformVersion": "118",
        "build": "Playwright Test - Demo",
        'name': 'page download and upload',
        "user": `divaharg180`,
        "accessKey": `mmzqxJPCZdw78OehLdx4q0fLuv3STae3T7sqmIQC3q1s20IB6w`,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '', // Optional
        "geoLocation": "IN" // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    }
}

let context: any;
let page: any;
let device: any;

test.describe("page download and upload", async () => {
    device = await webkit.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities))}`,
      );
    
    
    
    
      context = await device.newContext();
      page = await context.newPage();

    test("Download file", async () => {

        await page.goto("https://www.lambdatest.com/selenium-playground/");
        await page.locator('text="File Download"').click();

        await page.waitForTimeout(2000);

        await page.type("#textbox", "Like share comment");
        await page.click('id=create');

        const download = await Promise.all([
            page.waitForEvent("download"),
            page.click('id=link-to-download')
        ]);

        const fileName = download[0].suggestedFilename();
        await download[0].saveAs(fileName);
    });

    test("Upload file", async () => {
        // let device = await _android.connect(
        //     `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        //         JSON.stringify(capabilities))}`,
        // );

        // const context = await device.newContext();
        // const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground/");
        await page.locator('text="Upload File Demo"').click();

        const [fileChooser] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click('input[type="file"]')
        ]);

        await fileChooser.setFiles("path/to/uploadItems/divahar.jpg");

        // Add any additional steps related to file upload if needed.

        await page.waitForTimeout(5000);
        await page.close();
        await context.close();
        await device.close();
    });
});
