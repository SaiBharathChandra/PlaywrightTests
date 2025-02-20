# Playwright Tests

This repository contains automated end-to-end (E2E) tests using [Playwright](https://playwright.dev/), a powerful and modern browser automation library. The tests are designed to ensure the functionality, reliability, and performance of web applications across multiple browsers.


## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for package management)

---

## Installation

  **Clone the repository:**
   git clone https://github.com/SaiBharathChandra/PlaywrightTests.git
   cd PlaywrightTests
   
  **Install dependencies:**
  
   npm install
 
  **Install Playwright browsers:**
  
   npx playwright install
  
  **Run all tests:**
  
   npx playwright test
  
  **Run tests in headed mode (visible browser):**
  
   npx playwright test --headed
  
  **Run tests on a specific browser (e.g., Chrome):**

   npx playwright test --project=chromium
  
 **Run tests in debug mode:**

   npx playwright test --debug
  
  **Generate and open an HTML test repor**t:

   npx playwright show-report

  
## Test Structure

PlaywrightTests/
├── tests/               # Contains all test files
│   └── flipkartTest.spec.js    # Test file
│   └── wikipediaTests.spec.js  # Test file
├── screenshots/         # Test screenshots
├── playwright.config.js # Playwright configuration file
└── package.json         # Project dependencies and scripts

## Configuration

The playwright.config.js file contains the configuration for the test suite. You can customize:
Browsers (Chromium, Firefox, WebKit)
Test environments (headless, headed)
Timeouts, retries, and parallel execution
Screenshot and video capture settings
Refer to the Playwright Configuration Docs for more details.
Playwright generates detailed test reports automatically. After running the tests, you can view the report by running:

npx playwright show-report

The report includes:
Test results (passed/failed)
Screenshots and videos
Execution timelines

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes and push to the branch.
Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Playwright for providing an excellent testing framework.
Contributors and maintainers of this project.
