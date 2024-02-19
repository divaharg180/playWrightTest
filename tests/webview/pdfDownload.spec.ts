import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://filemasterdev.enerlex.com/');
  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('praneshBuyer');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('U67dQBvGdE2j');
  await page.getByRole('button', { name: 'Log In!' }).click();
  await page.getByPlaceholder('Search Name or Phone...').click();
  await page.getByPlaceholder('Search Name or Phone...').fill('4');
  await page.getByPlaceholder('Search Name or Phone...').press('Enter');
  await page.getByRole('link', { name: 'Jeeva_Pranesh' }).first().click();
  await page.getByRole('tab', { name: 'Docs', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AOH.Nell Abercrombie.pdf' }).click();
  const page1 = await page1Promise;
});