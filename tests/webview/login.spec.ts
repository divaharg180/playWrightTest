import {test} from "../../lambdatest-setup"
import { expect } from "@playwright/test";

test('test login', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('divaharg0@gmail.com');
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


  // async function generateRandomEmail() {
  //   const username = 'user' + Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999
  //   const domain = 'example.com'; // Replace with your desired domain
  
  //   const email = `${username}@${domain}`;
  //   return email;
  // }
});