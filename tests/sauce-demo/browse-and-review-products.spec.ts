import { test, expect } from '@playwright/test';

test.describe('Core storefront flows', () => {
  test('User can browse and review products before purchase', async ({ page }) => {
    // 1. Load the products page after successful login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);

    // 2. Review at least one product title and price
    const firstProduct = page.locator('[data-test="inventory-item"]').first();
    await expect(firstProduct).toBeVisible();
    await expect(firstProduct.locator('[data-test="inventory-item-name"]')).toContainText(/Sauce Labs/);
    await expect(firstProduct.locator('[data-test="inventory-item-price"]')).toBeVisible();

    // 3. Use the sort dropdown to change the product ordering
    const sortDropdown = page.locator('[data-test="product-sort-container"]');
    await sortDropdown.selectOption('lohi');
    await expect(sortDropdown).toHaveValue('lohi');
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toContainText('Sauce Labs Onesie');
  });
});
