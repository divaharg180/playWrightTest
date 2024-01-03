import type { Page } from '@playwright/test';

export default class LoginPage {
    constructor(public page: Page) { }

    async enterDetailsPage(xpathLocator: any, firstName: any) {
        await this.page.locator(`${xpathLocator}`).type(firstName);
    }
}
