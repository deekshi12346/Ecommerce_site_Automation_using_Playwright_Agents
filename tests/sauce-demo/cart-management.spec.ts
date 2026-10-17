import { test, expect } from '@playwright/test';

test.describe('Core storefront flows', () => {
  test('User can add a product to cart and review selection', async ({ page }) => {
    // 1. Click Add to cart on a product such as Sauce Labs Backpack
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 2. Open the cart by clicking the shopping cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/\/cart\.html$/);

    // 3. Verify the item name and price
    const cartItem = page.locator('[data-test="inventory-item-name"]').first();
    await expect(cartItem).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-item-price"]').first()).toContainText('$29.99');
  });
});
