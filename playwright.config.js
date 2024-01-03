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
    // },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
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
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1600 },
        channel: 'chrome'
      },
    },
    // {
    //   name: 'safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     channel: 'safari'
    //   },
    // },
  ],




  testMatch: [
    "tests/login.spec.ts",
    "tests/dropDown.spec.ts",
    "tests/calender.spec.ts",
    "tests/example.spec.ts",
    "tests/ecom.spec.ts",
    "tests/formFill.spec.ts",

  ], // Fix the typo here
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "only-on-failure",
    fullyParallel: true,
    workers: 1,
    // os: "Windows",
    // osVersion: "latest",
    // browserName: "Google Chrome",
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

