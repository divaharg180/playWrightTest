import { test, expect } from '@playwright/test';
import LoginPage from "../../pageObjects/loginPage";
const { webkit } = require('playwright')

const capabilities = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    "platformName": "macOs Big Sur",
    "platformVersion": "118",
    // "isRealMobile": true,
    "build": "Playwright Test - Demo",
    'name': 'test login',
    "user": `divaharg180`,
    "accessKey": `mmzqxJPCZdw78OehLdx4q0fLuv3STae3T7sqmIQC3q1s20IB6w`,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false,
    'tunnelName': '',
    'geoLocation': '',

  }
}


let context: any;
let page: any;
let device: any;

test('test login', async () => {

  console.log(capabilities, "capabilities")
  device = await webkit.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities))}`,
  );




  context = await device.newContext();
  page = await context.newPage();

  await page.goto('https://playwright.dev/');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('divaharg180@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('D');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Divan9013@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('guna');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
  await page.close();
  await context.close();
  await device.close();
});