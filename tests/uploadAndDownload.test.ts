import { test, expect } from '@playwright/test';
import path from 'path';
import { promises } from 'stream';

// test("Download file", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/");
//     await page.locator(`text ="File Download"`).click();

//     await page.waitForTimeout(5000);

//     await page.type("#textbox", "Like share comment");
//     await page.click(`id=create`)
//     // await page.click(`id=link-to-download`)

//     const download = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("id=link-to-download")
//     ])
//     // const path = await download[0].path();
//     // console.log(path)
//     const fileName = download[0].suggestedFilename();
//     await download[0].saveAs(fileName);

// })

test("upload file", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator(`text ="Upload File Demo"`).click();
    // await page.goto('https://test.ushja.org/login');
    // await page.locator('input[type="text"]').click();
    // await page.locator('input[type="text"]').fill('DIVA123Attribute');
    // await page.locator('input[type="password"]').click();
    // await page.locator('input[type="password"]').press('CapsLock');
    // await page.locator('input[type="password"]').fill('T');
    // await page.locator('input[type="password"]').press('CapsLock');
    // await page.locator('input[type="password"]').fill('Test@123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('button', { name: 'Horse Options' }).click();
    // await page.getByText('Transfer Horse Ownership').click();
    // await page.locator('div').filter({ hasText: /^Horse Name$/ }).getByRole('searchbox').click();
    // await page.locator('div').filter({ hasText: /^Horse Name$/ }).getByRole('searchbox').fill('testlive');
    // await page.getByRole('button', { name: 'Search' }).click();
    // await page.getByRole('row', { name: 'HJ6073987 TESTLIVE DIVA' }).getByRole('radio').check();
    // await page.getByRole('button', { name: 'Transfer' }).click();
    // await page.getByRole('button', { name: 'No' }).click();
    // await page.getByRole('textbox').click();
    // await page.getByRole('button', { name: 'Continue' }).click();
    // await page.getByLabel('Transfer: $').check();
    // await page.getByLabel('By signing below, I').check();
    // await page.getByText('Payment Options *You have').click();
    // await page.getByRole('textbox').click();
    // await page.getByRole('textbox').fill('c');
    // await page.getByRole('button', { name: 'Upload Bill of Sale' }).click();


    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click('input[type="file"]')
    ])
    await uploadFiles.setFiles("uploadItems/divahar.jpg");
    // Start waiting for file chooser before clicking. Note no await.
    // const fileChooserPromise = page.waitForEvent('filechooser');
    // await page.getByText('Upload Doc(s)').click();
    // const fileChooser = await fileChooserPromise;
    // await fileChooser.setFiles(path.join(__dirname, 'uploadItems/divahar.jpg'));

    // await page.waitForTimeout(5000);
    // await page.getByRole('button', { name: 'Make Payment' }).click();
    await page.waitForTimeout(5000);

})