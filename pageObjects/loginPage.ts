import type { Page } from '@playwright/test';

export default class LoginPage {
    constructor(public page: Page) { }

    async enterDetailsPage(xpathLocator: any, firstName: any) {
        await this.page.locator(`${xpathLocator}`).type(firstName);
    }
    async clickButton(buttonName: any) {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.getByRole('button', { name: `${buttonName}` }).click()

        ])
    }

    async generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }

    async generateRandomEmail() {
        const username = await this.generateRandomString(8);
        const domain = await this.generateRandomString(5) + '.com';
        return `${username}@${domain}`;
    }


}
