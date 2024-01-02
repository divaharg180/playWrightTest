import { test } from "@playwright/test";
import moment from "moment";

// test("calender date picker", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/");
//     await page.locator(`text ="Bootstrap Date Picker"`).click();

//     let date = moment().format("YYYY-MM-DD");
//     await page.fill(`//*[@id="birthday"]`, date);
// })

test("calender using moment", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Bootstrap Date Picker"`).click();
    await page.click(`//*[@placeholder="Start date"]`);

    let date = moment().format("MMMM YYYY");
    console.log(date, "-*-*-*--*--*");

    await dateSelectPicker(22, "January 2024");

    await page.click(`//*[@placeholder="End date"]`);
    await dateSelectPicker(22, "April 2024");






    async function dateSelectPicker(date: any, monthSelect: string) {
        let mmYY = await page.locator(`(//*[@class="table-condensed"]//th[@class="datepicker-switch"])[1]`)
        const prevButton = await page.locator(`(//*[@class="table-condensed"]//th[@class="prev"])[1]`);
        const nextButton = await page.locator(`(//*[@class="table-condensed"]//th[@class="next"])[1]`);


        const thisMonth = moment(monthSelect, "MMMM YYYY").isBefore();
        console.log(await mmYY.textContent(), "-*/*--*/-*/-*---/-/")
        while ((await mmYY.textContent()) != monthSelect) {
            if (thisMonth) {
                await prevButton.click();
            } else {
                await nextButton.click();
            }
            await page.click(`//td[@class="day"][text()="${date}"]`)
        }
    }
})


