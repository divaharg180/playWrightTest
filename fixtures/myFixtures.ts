import { test as myTest } from "@playwright/test";

// type divahar = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 26,
    email: "divahar@gmail.com"
})

export const test = myFixtureTest;