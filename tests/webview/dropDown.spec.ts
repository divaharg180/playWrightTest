import {test} from "../../lambdatest-setup"

test("dropDown select", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="JQuery Select dropdown"`).click();
    await selectCountry(1, `//*[@id="select2-country-results"]`, "India")
    await page.waitForTimeout(5000);




    async function selectCountry(selectIndex, xpathSelector, countryName) {
        await page.click(`(//*[@role="combobox"])[${selectIndex}]`);
        await page.locator(`${xpathSelector}`).locator("li", { hasText: countryName }).click()
    }

})