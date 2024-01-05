// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from "../../pageObjects/loginPage";
const { chromium } = require('playwright')

const capabilities = {
  'browserName': 'chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright Single Build - 5',
    'name': 'get started link',
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

test('has title', async () => {
  device = await chromium.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities))}`,
  );

  context = await device.newContext();
  page = await context.newPage();
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async () => {
  // let device = await chromium.connect(
  //   `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
  //     JSON.stringify(capabilities))}`,
  // );

  // const context = await device.newContext();
  // const page = await context.newPage();
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.close();
  await context.close();
  await device.close();
});
