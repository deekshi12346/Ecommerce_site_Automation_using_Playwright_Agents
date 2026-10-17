import { test, expect } from '@playwright/test';

test.describe('Core storefront flows', () => {
  test('User can enter shipping details and continue to order review', async ({ page }) => {
    // 1. Click the checkout button from the cart page
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);

    // 2. Enter a valid first name, last name, and postal code
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('12345');

    // 3. Click Continue
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(page.locator('[data-test="finish"]')).toBeVisible();
  });
});
