import { test, expect } from '@playwright/test';

test.describe('Core storefront journeys', () => {
  test('User can complete purchase and confirm order', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Books' }).first().click();
    await expect(page).toHaveURL(/\/books$/);

    await page.locator('.product-item').first().getByRole('button', { name: 'Add to cart' }).click();

    await page.goto('https://demowebshop.tricentis.com/books');
    const bookItem = page.locator('div.product-item').filter({ hasText: /computing and internet/i }).first();
    await expect(bookItem).toBeVisible();
    await bookItem.getByRole('button', { name: 'Add to cart' }).click();

    const successMessage = page.locator('.bar-notification.success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(/The product has been added to your shopping cart/i);

    const cartLink = page.locator('a.ico-cart').filter({ hasText: /^Shopping cart$/i }).first();
    await expect(cartLink).toBeVisible();
    await cartLink.click();

    await expect(page).toHaveURL(/\/cart$/);
    await page.goto('https://demowebshop.tricentis.com/onepagecheckout');
    await expect(page).toHaveURL(/\/onepagecheckout$/);
    await expect(page.locator('#BillingNewAddress_FirstName')).toBeVisible();

    await page.locator('#BillingNewAddress_FirstName').fill('Test');
    await page.locator('#BillingNewAddress_LastName').fill('User');
    await page.locator('#BillingNewAddress_Email').fill('testuser123@example.com');
    await page.locator('#BillingNewAddress_CountryId').selectOption('1');
    await page.locator('#BillingNewAddress_City').fill('New York');
    await page.locator('#BillingNewAddress_Address1').fill('123 Main St');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('10001');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('1234567890');

    await page.locator('#billing-buttons-container input[value="Continue"]').click();
    await page.locator('#shipping-buttons-container input[value="Continue"]').click();
    await page.locator('#shipping-method-buttons-container input[value="Continue"]').click();
    await page.locator('#payment-method-buttons-container input[value="Continue"]').click();
    await page.locator('#payment-info-buttons-container input[value="Continue"]').click();
    await page.locator('input[value="Confirm"]').click();

    await expect(page).toHaveURL(/\/checkout\/completed\/?$/);
    await expect(page.locator('body')).toContainText('Your order has been successfully processed!');
  });
});
