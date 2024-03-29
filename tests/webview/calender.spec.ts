import moment from "moment";
import { test, expect } from '@playwright/test';
const { chromium } = require('playwright')

const capabilities = {
    'browserName': 'chrome', 
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Test - Demo',
        'name': 'calender date picker',
        "user": `divaharg180`,
        "accessKey": `mmzqxJPCZdw78OehLdx4q0fLuv3STae3T7sqmIQC3q1s20IB6w`,
        'network': true,
        'video': true,
        'console': true,
        "geoLocation": "US"
    }
}

let context: any;
let page: any;
let device: any;
test("calender date picker", async () => {
    device = await chromium.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify(capabilities))}`,
    );

    context = await device.newContext();
    page = await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Bootstrap Date Picker"`).click();

    let date = moment().format("YYYY-MM-DD");
    await page.fill(`//*[@id="birthday"]`, date);
})

test("calender using moment", async () => {


    const context = await device.newContext();
    const page = await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Bootstrap Date Picker"`).click();
    await page.click(`//*[@placeholder="Start date"]`);

    let date = moment().format("MMMM YYYY");
    console.log(date, "-*-*-*--*--*");

    await dateSelectPicker(22, "January 2024");

    await page.click(`//*[@placeholder="End date"]`);
    await dateSelectPicker(22, "April 2024");


    await page.close();
    await context.close();
    await device.close();



    async function dateSelectPicker(date, monthSelect) {
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



