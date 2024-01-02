import { PlaywrightTestConfig } from 'playwright/test';
// Use the type PlaywrightTestConfig in your code
module.exports = {
  ...PlaywrightTestConfig,
  testMatch: ["tests/uploadAndDownload.test.ts"], // Fix the typo here
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "only-on-failure",
    launchOptions: {
      //slowMo: 2000
    }
  },
  retries: 2,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]],
};

