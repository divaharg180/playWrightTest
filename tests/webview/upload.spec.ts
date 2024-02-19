import { expect } from "playwright/test";
//import { test } from "../../lambdatest-setup";
import { test } from "../../browserstack-setup";

test('upload image in mobile cases', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    // await page.locator('#file-upload').click();
    // await page.locator('#file-upload').setInputFiles('lambdatest-1-1.jpg');

     await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/divahar.jpg");
    await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/apple.png");
    await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/ball.doc");
    await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/cat.docx");
    await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/rat.bmp");
    await page.locator('#file-upload').setInputFiles("./tests/webview/uploadItems/sample.pdf");

    await page.getByRole('button', { name: 'Upload' }).click();

















 
    // await page.goto("https://the-internet.herokuapp.com/upload");

    // const aaa = await page.locator('//*[text()="File Uploader"]').isVisible();
    // console.log(aaa,"///-/-*/-*//-*-/-*-*-*-*-*-*-*-*-*--*");
    // let filepath = "./tests/webview/uploadItems/divahar.jpg";
    //  await page.locator('input[id="file-upload"]').setInputFiles("./tests/webview/uploadItems/divahar.jpg");
    // await page.locator('input[id="file-upload"]').setInputFiles(filepath);

    // await page.setInputFiles('input[id="file-upload"]', filepath)
    // const [fileChooser] = await Promise.all([
    //     // It is important to call waitForEvent before click to set up waiting.
    //     page.waitForEvent('filechooser'),
    //     // Opens the file chooser.
    //     page.locator('#file-upload').click(),
    //   ])
    //   await fileChooser.setFiles(
    //     filepath
    //   )

});