import { PlaywrightTestConfig, devices } from 'playwright/test';
module.exports = {
  ...PlaywrightTestConfig,
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      viewport: { width: 2560, height: 1600 },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Galaxy S21 5G'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge'
    //   },
    // },
    // {
    //   name: 'chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     viewport: { width: 2560, height: 1600 },
    //     channel: 'chrome'
    //   },
    // },
    // {
    //   name: 'safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     channel: 'safari'
    //   },
    // },
  ],




  testMatch: [
    // "tests/webview/login.spec.ts",
    // "tests/webview/dropDown.spec.ts",
    // "tests/webview/calender.spec.ts",
    // "tests/webview/example.spec.ts",
    // "tests/webview/ecom.spec.ts",
    // "tests/webview/formFill.spec.ts",


    //"pomtest/addToCart.spec.ts",
    // "fixtures/fixture.test.ts",
    "pomtest/addToCart.fixture.spec.ts"

    // "tests/webviewSafari/login.spec.ts",
    // "tests/webviewSafari/dropDown.spec.ts",
    // "tests/webviewSafari/calender.spec.ts",
    // "tests/webviewSafari/example.spec.ts",
    // "tests/webviewSafari/ecom.spec.ts",
    // "tests/webviewSafari/formFill.spec.ts",

  ], // Fix the typo here
  use: {
      // connectOptions: {
      //   wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      //     JSON.stringify(capabilities))}`
      // },
    baseURL: `https://ecommerce-playground.lambdatest.io/index.php?`,
    headless: false,
    screenshot: "only-on-failure",
    video: "only-on-failure",
    fullyParallel: true,
    workers: 1,
    // os: "Windows",
    // osVersion: "latest",
    // browserName: "Google Chrome",
    launchOptions: {
     // slowMo: 3000
    }
  },
  retries: 1,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]],
};

