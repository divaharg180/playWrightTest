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

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    //   viewport: { width: 2560, height: 1600 },
    // },

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
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
        channel: 'safari',
        viewport: { width: 2560, height: 1600 },

      },
    },
  ],




  testMatch: [
    "tests/webview/login.spec.ts",
    "tests/webview/dropDown.spec.ts",
    "tests/webview/example.spec.ts",
    "tests/webview/ecom.spec.ts",
    "tests/webview/formFill.spec.ts",


    // "tests/webviewSafari/login.spec.ts",
    // "tests/webviewSafari/dropDown.spec.ts",
    // "tests/webviewSafari/calender.spec.ts",
    // "tests/webviewSafari/example.spec.ts",
    // "tests/webviewSafari/ecom.spec.ts",

  ], // Fix the typo here
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "only-on-failure",
    fullyParallel: true,
    workers: 1,

    launchOptions: {
      slowMo: 3000
    }
  },
  retries: 1,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]],
};

