import { test, expect, webkit } from "@playwright/test";
import LoginPage from "../pageObjects/loginPage";

const capabilities = {
    'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
        "platformName": "macOs Big Sur",
        "platformVersion": "118",
        "build": "Playwright Safari Build - 3",
        "user": `divaharg180`,
        "accessKey": `mmzqxJPCZdw78OehLdx4q0fLuv3STae3T7sqmIQC3q1s20IB6w`,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '', // Optional
        'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    }
}


let email: any;
let password: any;
let device: any;
test.describe("Page ecom register and login", async () => {
    test("Register PomPage test", async ({ page, baseURL }, testInfo) => {

        device = await webkit.connect(
            `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
                JSON.stringify(capabilities))}`,
        );

        console.log(testInfo.title, "*-*--*-*-/*-/--/-/-/-/-/-/-/-/-/")

        const loginPage = new LoginPage(page);
        email = await loginPage.generateRandomEmail()
        password = "1111122222";
        console.log(email, "email**************")
        await page.goto(`${baseURL}route=account/register`);
        await loginPage.enterDetailsPage(`[name="firstname"]`, `Diva`)
        await loginPage.enterDetailsPage(`[name="lastname"]`, `G`)
        await loginPage.enterDetailsPage(`[name="email"]`, email)
        await loginPage.enterDetailsPage(`[name="telephone"]`, `111111111`)
        await loginPage.enterDetailsPage(`[name="password"]`, password)
        await loginPage.enterDetailsPage(`[name="confirm"]`, password)
        await page.getByText('Yes').click();
        await page.getByText('I have read and agree to the').click();
        await loginPage.clickButton(`continue`);
        console.log(testInfo.status, "*-*--*-*-/*-/-587585858-/-/-/-/-/-/-/-/-/")

    })
    test("Login page test", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        console.log(email,"email//***/**-*-")
        await page.goto(`${baseURL}route=account/login`);
        await page.locator(`[name="email"]`).fill(email)
        await page.locator(`[name="password"]`).fill(password)
        await login.clickButton(`login`);

        // expect(await page.title()).toBe("My Account");



    })

})