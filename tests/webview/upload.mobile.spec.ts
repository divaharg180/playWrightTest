const {_android} = require("playwright");
import { expect } from "playwright/test";
import { test } from "../../lambdatest-setup";

  const capabilities = {
    "LT:Options": {
      "platformName": "android",
      "deviceName": "Samsung Galaxy S23",
      "platformVersion": "latest",
      "isRealMobile": true,
      "build": "Playwright Android Build",
      "name": "Playwright android test",
      "user": `divaharg509`,
      "accessKey": `WJelZfv7TAHrWgTsvYMw1rKJwHUPnRK14NGjOFGzbEvU0HdvGj`,
      "network": true,
      "video": true,
      "console": true,
      "projectName": "New UI",
    },
  };

  test('register and login page bjkj ', async () => {

  let device = await _android.connect(
      `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities))}`,
  );

  console.log(`Model:: ${device.model()}, serial:: ${device.serial()}`);

  await device.shell("am force-stop com.android.chrome");

  let context = await device.launchBrowser();
  let page = await context.newPage();

  await page.goto("https://duckduckgo.com");
  let element = await page.locator("[name=\"q\"]");
  await element.click();
  await element.type("Playwright");
  await element.press("Enter");
  let title = await page.title();
  
  try {
    expect(title).toEqual("Playwright at DuckDuckGo");
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: {status: "passed", remark: "Assertions passed" },})}`);
    await teardown(page, context, device)
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: "setTestStatus", arguments: { status: "failed", remark: e.stack }})}`);
    await teardown(page, context, device)
    throw e.stack
  }

});

async function teardown(page, context, device) {
  await page.close();
  await context.close();
  await device.close();
}