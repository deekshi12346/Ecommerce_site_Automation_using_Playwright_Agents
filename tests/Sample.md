Prompt 1 : Generate Tests Using Page Object Model (POM):

Generate Playwright tests for all the test scenarios provided in the test plan.

Requirements:

- Use TypeScript.
- Follow the Page Object Model (POM) design pattern.
- Create a separate Page Object class for each application page.
- Keep page locators and reusable page actions inside the Page Object classes.
- Keep test assertions and business scenarios inside the test (.spec.ts) files.
- Use Playwright's built-in locators (getByRole, getByLabel, getByText, getByPlaceholder, etc.) whenever possible.
- Avoid XPath unless absolutely necessary.
- Write clean, readable, and maintainable code.
- Organize the generated files using the following structure:

pages/
    LoginPage.ts
tests/
    login.spec.ts

- Reuse Page Object methods across multiple tests.
- Generate meaningful method names and comments where appropriate.
- Follow Playwright and TypeScript best practices.