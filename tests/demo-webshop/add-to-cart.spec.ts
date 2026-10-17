import { test, expect } from '@playwright/test';

test.describe('Core storefront journeys', () => {
  test('User can add a product to cart', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Books' }).first().click();
    await expect(page).toHaveURL(/\/books$/);

    const firstProduct = page.locator('.product-item').first();
    const productTitle = (await firstProduct.locator('.product-title').textContent())?.trim() ?? '';

    await firstProduct.getByRole('button', { name: 'Add to cart' }).click();

    await firstProduct.getByRole('button', { name: 'Add to cart' }).click();

    const successMessage = page.locator('.bar-notification.success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(/The product has been added to your shopping cart/i);

    const cartLink = page.locator('a.ico-cart').filter({ hasText: /^Shopping cart$/i }).first();
    await expect(cartLink).toBeVisible();
    await cartLink.click();

    await expect(page).toHaveURL(/\/cart$/);
    const cartItem = page.locator('td.product').filter({ hasText: /Computing and Internet|Simple Computer/i }).first();
    await expect(cartItem).toBeVisible();

    await expect(page).toHaveURL(/\/cart$/);
    await expect(page.locator('body')).toContainText('Shopping cart');
    await expect(page.locator('body')).toContainText(productTitle);
  });
});
