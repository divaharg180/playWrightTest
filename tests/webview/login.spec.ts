import {test} from "../../lambdatest-setup"
import { expect } from "@playwright/test";

test('test login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('P');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();


  // async function generateRandomEmail() {
  //   const username = 'user' + Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999
  //   const domain = 'example.com'; // Replace with your desired domain
  
  //   const email = `${username}@${domain}`;
  //   return email;
  // }
});