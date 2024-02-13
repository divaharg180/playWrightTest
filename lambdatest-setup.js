
const base = require('@playwright/test')
const path = require('path')
const { chromium } = require('playwright')
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const capabilities = {
    'LT:Options': {
        'build': `Test demo Jan'23`,
        'name': 'Playwright Test',
        "user": `divaharcoretopia`,
        "accessKey": `30p71Y16ej5CgXujgBoUNbYKtXpjarGnOxd0PeQWiLRu9QakbN`,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false,
        'tunnelName': '',
        'geoLocation': 'US',
        'playwrightClientVersion': playwrightClientVersion
    }
}

const modifyCapabilities = (configName, testName) => {
    let config = configName.split('@lambdatest')[0]
    let [browserName, browserVersion, platform] = config.split(':')
    capabilities.browserName = browserName ? browserName : capabilities.browserName
    capabilities.browserVersion = browserVersion ? browserVersion : capabilities.browserVersion
    capabilities['LT:Options']['platform'] = platform ? platform : capabilities['LT:Options']['platform']
    capabilities['LT:Options']['name'] = testName
}

const getErrorMessage = (obj, keys) => keys.reduce((obj, key) => (typeof obj == 'object' ? obj[key] : undefined), obj)

exports.test = base.test.extend({
    page: async ({ page, playwright }, use, testInfo) => {
        let fileName = testInfo.file.split(path.sep).pop()
        if (testInfo.project.name.match(/lambdatest/)) {
            modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`)

            const browser = await chromium.connect({
                wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
            })

            const ltPage = await browser.newPage(testInfo.project.use)
            await use(ltPage)

            const testStatus = {
                action: 'setTestStatus',
                arguments: {
                    status: testInfo.status,
                    remark: getErrorMessage(testInfo, ['error', 'message'])
                }
            }
            await ltPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`)
            await ltPage.close()
            await browser.close()
        } else {
            // Run tests in local in case of local config provided
            await use(page)
        }
    }
})