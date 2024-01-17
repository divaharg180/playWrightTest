import { test, expect } from '@playwright/test';
import LoginPage from "../../pageObjects/loginPage";
const { chromium } = require('playwright')

const capabilities = {
  'browserName': 'chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright Single Build - 5',
    'name': 'test login',
    "user": `divahar`,
    "accessKey": `uAsYjKmU1MUvxm8MdwKUtZufxGptw30jvSvx8oupdRzspU8gxB`,
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
  device = await chromium.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities))}`,
  );

  context = await device.newContext();
  page = await context.newPage();

  await page.goto('https://playwright.dev/');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('divahar@gmail.com');
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