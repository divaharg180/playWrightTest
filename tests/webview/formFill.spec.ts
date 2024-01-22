import {test} from "../../lambdatest-setup"
import LoginPage from "../../pageObjects/loginPage";
import { expect } from "@playwright/test";




test("form fill details", async ({ page }) => {

    const loginPage = new LoginPage(page);


    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Input Form Submit"`).click();

    await loginPage.enterDetailsPage(`//*[@placeholder="Name"]`, "divaharg0");
    await loginPage.enterDetailsPage(`//*[text()="Input form validations"]/following::*[@type="email"]`, "divaharg0@iterasolutions.co.in");
    await loginPage.enterDetailsPage(`//*[@placeholder="Password"]`, "Diva1234");
    await loginPage.enterDetailsPage(`//*[@placeholder="Company"]`, "company");
    await loginPage.enterDetailsPage(`//*[@placeholder="Website"]`, "www.google.com");

    await loginPage.enterDetailsPage(`//*[@placeholder="City"]`, "erode");
    await loginPage.enterDetailsPage(`//*[@placeholder="Address 1"]`, "Address 1");
    await loginPage.enterDetailsPage(`//*[@placeholder="Address 2"]`, "Address 2");
    await loginPage.enterDetailsPage(`//*[@placeholder="State"]`, "State");
    await loginPage.enterDetailsPage(`//*[@placeholder="Zip code"]`, "60044");

})