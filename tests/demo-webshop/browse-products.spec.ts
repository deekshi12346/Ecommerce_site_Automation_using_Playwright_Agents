import { test, expect } from '@playwright/test';

test.describe('Core storefront journeys', () => {
  test('User can browse product categories and review items', async ({ page }) => {
    // 1. From the home page, click a category such as Books or Computers
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Books' }).first().click();
    await expect(page).toHaveURL(/\/books$/);

    // 2. Review a product card to verify the product title, description, and price
    const productCard = page.locator('.product-item').first();
    await expect(productCard).toBeVisible();
    await expect(productCard).toContainText('Computing and Internet');
    await expect(productCard).toContainText('30.00');

    // 3. Continue exploring the category and confirm products are visible
    const products = page.locator('.product-item');
    await expect(products).toHaveCount(6);
    await expect(products.first()).toContainText('Computing and Internet');
  });
});
