import {test} from "../../lambdatest-setup"

test('ecom page', async ({ page }) => {

  await page.goto('https://www.SauceDemo.com');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('divaharg0');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('test');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('#root div').filter({ hasText: 'Accepted usernames are:' }).nth(3).click();
  await page.locator('[data-test="username"]').click({
    clickCount: 3
  });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('#shopping_cart_container a').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="cancel"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('divaharg0');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('g');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('535832');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
  await page.locator('[data-test="back-to-products"]').click();

});