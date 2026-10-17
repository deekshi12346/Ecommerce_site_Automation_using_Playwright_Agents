import { test, expect } from '@playwright/test';

test.describe('Core storefront journeys', () => {
  test('User can register a new account', async ({ page }) => {
    const email = `testuser${Date.now()}@example.com`;

    // 1. Open the DemoWebShop home page at https://demowebshop.tricentis.com/
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle(/Demo Web Shop/);

    // 2. Click the Register link
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page).toHaveURL(/\/register$/);

    // 3. Fill in the required registration details (gender, first name, last name, email, password, confirm password)
    await page.locator('#gender-male').check();
    await page.locator('#FirstName').fill('Test');
    await page.locator('#LastName').fill('User');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Password123!');
    await page.locator('#ConfirmPassword').fill('Password123!');

    // 4. Click Register
    await page.locator('#register-button').click();

    await expect(page.locator('body')).toContainText('Your registration completed');
  });
});
