# DemoWebShop Core User Operations Test Plan

## Application Overview

Test plan covering five essential end-user flows on the DemoWebShop e-commerce demo site: account registration, product browsing, product add-to-cart, cart management, and checkout completion. These scenarios assume a blank/fresh browser state and verify the main customer journey from first visit through successful purchase.

## Test Scenarios

### 1. Core storefront journeys

**Seed:** `tests/seed.spec.ts`

#### 1.1. User can register a new account

**File:** `tests/core/register-account.spec.ts`

**Steps:**
  1. Open the DemoWebShop home page at https://demowebshop.tricentis.com/
    - expect: The page should load successfully and show the main navigation and featured products.
  2. Click the Register link in the top navigation
    - expect: The registration page should open with personal details and password fields.
  3. Fill in the required registration details (gender, first name, last name, email, password, confirm password)
    - expect: The form should accept all values without validation error.
  4. Click the Register button
    - expect: The account should be created successfully and the user should be redirected to a confirmation or account page.

#### 1.2. User can browse product categories and review items

**File:** `tests/core/browse-products.spec.ts`

**Steps:**
  1. From the home page, click a category such as Books or Computers
    - expect: The category page should display a list of products with images, names, descriptions, prices, and Add to cart buttons.
  2. Review a product card to verify the brochure details
    - expect: The product title, description, and price should be visible and readable.
  3. Use the site navigation or category links to continue exploring products
    - expect: The user can move between category pages and see the correct product list for each section.

#### 1.3. User can add a product to cart

**File:** `tests/core/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to a product listing page
    - expect: The product list should include available items and Add to cart controls.
  2. Click the Add to cart button for a product
    - expect: The selected item should be added to the shopping cart, and the cart count or cart summary should update.
  3. Open the shopping cart from the header
    - expect: The cart page should show the added product with its quantity and price.

#### 1.4. User can manage cart items and start checkout

**File:** `tests/core/cart-management-and-checkout.spec.ts`

**Steps:**
  1. On the cart page, review the line item details and quantity
    - expect: The selected product should appear with its correct title, price, and quantity.
  2. Update the cart quantity or continue to checkout
    - expect: The cart summary should reflect the current selection and the user should be taken to checkout.
  3. Proceed to checkout from the cart
    - expect: The checkout page should open and request shipping and billing information.

#### 1.5. User can complete purchase and confirm order

**File:** `tests/core/complete-order.spec.ts`

**Steps:**
  1. Enter required checkout information such as billing address and payment details
    - expect: The checkout form should accept valid entries and no blocking validation errors should appear.
  2. Click the place order or confirm purchase button
    - expect: The purchase should be processed successfully and the user should see a confirmation message.
  3. Verify the final confirmation page
    - expect: A success message and order confirmation details should appear, indicating the purchase is complete.
