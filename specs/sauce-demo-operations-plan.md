# SauceDemo Core User Operations Test Plan

## Application Overview

Test plan covering five essential end-user flows on the SauceDemo e-commerce demo site: login, product discovery, cart management, checkout, and order completion. These scenarios assume a fresh browser state and validate the main shopper journey from entry to successful purchase.

## Test Scenarios

### 1. Core storefront flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. User can log in and access the products page

**File:** `tests/core/login.spec.ts`

**Steps:**
  1. Open the SauceDemo login page at https://www.saucedemo.com/
    - expect: The page should display the login form with username, password, and login button.
  2. Enter standard_user in the username field and secret_sauce in the password field
    - expect: The credentials should populate correctly without validation errors.
  3. Click the Login button
    - expect: The browser should navigate to the products catalog page at /inventory.html.
    - expect: The page should display the inventory list and shopping cart icon.

#### 1.2. User can browse and review products before purchase

**File:** `tests/core/browse-and-sort-products.spec.ts`

**Steps:**
  1. Load the products page after successful login
    - expect: The catalog should display multiple product cards with images, names, prices, and Add to cart buttons.
  2. Review at least one product title and price
    - expect: The product name and price should be visible and readable on the page.
  3. Use the sort dropdown to change the product ordering
    - expect: The products should reorder according to the selected option, such as Name (A to Z) or Price (low to high).

#### 1.3. User can add a product to cart and review selection

**File:** `tests/core/cart-management.spec.ts`

**Steps:**
  1. Click Add to cart on a product such as Sauce Labs Backpack
    - expect: The product should be added to the cart and the cart badge count should update.
  2. Open the cart by clicking the shopping cart icon
    - expect: The cart page should load and show the selected product in the cart.
  3. Verify the item name and price
    - expect: The item summary should match the product selected earlier.

#### 1.4. User can enter shipping details and continue to order review

**File:** `tests/core/checkout-flow.spec.ts`

**Steps:**
  1. Click the checkout button from the cart page
    - expect: The browser should navigate to the checkout information page.
  2. Enter a valid first name, last name, and postal code
    - expect: The fields should accept the entered values without errors.
  3. Click Continue
    - expect: The page should advance to the overview page showing the item, payment summary, and Finish button.

#### 1.5. User can complete checkout and confirm successful purchase

**File:** `tests/core/order-confirmation.spec.ts`

**Steps:**
  1. Click the Finish button on the order overview page
    - expect: The browser should navigate to the order confirmation page.
  2. Verify the confirmation page content
    - expect: The page should display a success message and a Back Home or Back to products option.
    - expect: The purchase should be marked as complete.
