import { test, expect } from '@playwright/test';

test.describe('Core storefront flows', () => {
  test('User can log in and access the products page', async ({ page }) => {
    // 1. Open the SauceDemo login page at https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    // 2. Enter standard_user in the username field and secret_sauce in the password field
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');

    // 3. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  });
});
