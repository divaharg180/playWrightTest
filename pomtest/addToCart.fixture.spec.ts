import { test, expect } from "../base/pomFixture";
import LoginPage from "../pageObjects/loginPage";

let email: any;
let password: any;
test.describe("Page ecom register and login", async () => {
    test("Register PomPage test", async ({ page, baseURL, loginPage }, testInfo) => {
        console.log(testInfo.title, "*-*--*-*-/*-/--/-/-/-/-/-/-/-/-/")

        // const loginPage = new LoginPage(page);
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
    })
    test("Login page test", async ({ page, baseURL, loginPage },testInfo) => {
        console.log(testInfo.title, "*-*--*-*-/*-/--/-/-/-/-/-/-/-/-/")

        // const login = new LoginPage(page);
        console.log(email, "email***********-*")
        await page.goto(`${baseURL}route=account/login`);
        await page.locator(`[name="email"]`).fill(email)
        await page.locator(`[name="password"]`).fill(password)
        await loginPage.clickButton(`login`);

        // expect(await page.title()).toBe("My Account");



    })

})