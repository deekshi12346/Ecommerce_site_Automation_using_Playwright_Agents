import { test, expect } from '@playwright/test';

test.describe('Core storefront journeys', () => {
  test('User can manage cart items and start checkout', async ({ page }) => {
    // 1. Review the cart item details and quantity
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Books' }).first().click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByRole('link', { name: 'Shopping cart' }).first().click();
    await expect(page.locator('body')).toContainText('Computing and Internet');

    // 2. Proceed to checkout from the cart
    await page.locator('input[value="Checkout"]').click();

    // 3. Confirm the checkout page loads with billing or shipping information fields
    await expect(page).toHaveURL(/\/onepagecheckout$/);
    await expect(page.locator('#BillingNewAddress_FirstName')).toBeVisible();
    await expect(page.locator('#BillingNewAddress_LastName')).toBeVisible();
  });
});
