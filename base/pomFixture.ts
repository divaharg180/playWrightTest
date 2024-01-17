import { test as baseTest, chromium, webkit } from "@playwright/test"
import LoginPage from "../pageObjects/loginPage"
import path from "path";
const { _android: android } = require('playwright');


type pages = {
    loginPage: LoginPage
}

const capabilities = [
    {
      'browserName': 'pw-webkit',
      'browserVersion': 'latest',
      'LT:Options': {
        'platformName': 'macOs Big Sur',
        'platformVersion': '118',
        'build': 'Playwright Safari Build - 3',
        'user': 'divahar',
        'accessKey': 'uAsYjKmU1MUvxm8MdwKUtZufxGptw30jvSvx8oupdRzspU8gxB',
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false,
        'tunnelName': '',
        'geoLocation': '',
      }
    },
    {
      'browserName': 'chrome',
      'browserVersion': 'latest',
      'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Single Build - 5',
        'name': 'ecom page',
        'user': 'divahar',
        'accessKey': 'uAsYjKmU1MUvxm8MdwKUtZufxGptw30jvSvx8oupdRzspU8gxB',
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false,
        'tunnelName': '',
        'geoLocation': '',
      }
    }
  ];


const modifyCapabilities = (browserIndex,configName, testName) => {
    let config = configName.split("@lambdatest")[0];
    let [browserName, browserVersion, platform] = config.split(":");
    capabilities[0].browserName = browserName
        ? browserName
        : capabilities[browserIndex].browserName;
    capabilities[browserIndex].browserVersion = browserVersion
        ? browserVersion
        : capabilities[browserIndex].browserVersion;
    capabilities[browserIndex]["LT:Options"]["platform"] = platform
        ? platform
        : capabilities[browserIndex]["LT:Options"]["platform"];
    capabilities[browserIndex]["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
    keys.reduce((obj, key) => (typeof obj == "object" ? obj[key] : undefined),
    );

const testPages = baseTest.extend<pages>({
    page: async ({ }, use, testInfo) => {
        // Configure LambdaTest platform for cross-browser testing
        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/) && capabilities[0].browserName == "pw-webkit") {
            modifyCapabilities[0](
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );

            const device = await webkit.connect(
                `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                    JSON.stringify(capabilities))}`,
            );

            const context = await device.newContext(testInfo.project.use);
            const testPage = await context.newPage();
            await use(testPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: testInfo.error?.stack || testInfo.error?.message,
                },
            };
            await testPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await testPage.close();
            await context.close();
            await device.close();
        }
        else if (testInfo.project.name.match(/lambdatest/) && capabilities[1].browserName == "chrome") {
            modifyCapabilities[1](
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );

            const device = await chromium.connect(
                `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                    JSON.stringify(capabilities))}`,
            );

            const context = await device.newContext(testInfo.project.use);
            const testPage = await context.newPage();
            await use(testPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: testInfo.error?.stack || testInfo.error?.message,
                },
            };
            await testPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await testPage.close();
            await context.close();
            await device.close();
        } else if (testInfo.project.name.match(/lambdatest/) && capabilities[2].browserName == "Andriod") {
            modifyCapabilities[2](
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );

            const [device] = await android.devices(
                `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                    JSON.stringify(capabilities))}`,
            );

            console.log(device.model());
            console.log(device.serial());
            await device.shell('am force-stop com.android.chrome');
            const context = await device.launchBrowser();

            const testPage = await context.newPage();
            await use(testPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: testInfo.error?.stack || testInfo.error?.message,
                },
            };
            await testPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await testPage.close();
            await context.close();
            await device.close();
        }
        else if (testInfo.project.name.match(/lambdatest/) && capabilities[3].browserName == "Iphone") {
            modifyCapabilities[3](
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );

            const device = await webkit.connect(
                `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                    JSON.stringify(capabilities))}`,
            );

            const context = await device.newContext(testInfo.project.use);
            const testPage = await context.newPage();
            await use(testPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: testInfo.error?.stack || testInfo.error?.message,
                },
            };
            await testPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await testPage.close();
            await context.close();
            await device.close();

        } else {
            console.log("-***/*/*/*chrome else***divahar*****")
            // const device = await chromium.launch();
            // const context = await device.newContext(testInfo.project.use);
            // const page = await context.newPage();
            // await use(page);


            // modifyCapabilities[1](
            //     testInfo.project.name,
            //     `${testInfo.title} - ${fileName}`
            // );

            const device = await chromium.connect(
                `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                    JSON.stringify(capabilities))}`,
            );

            const context = await device.newContext(testInfo.project.use);
            const testPage = await context.newPage();
            await use(testPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: testInfo.error?.stack || testInfo.error?.message,
                },
            };
            await testPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await testPage.close();
            await context.close();
            await device.close();
        }
    },


    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;