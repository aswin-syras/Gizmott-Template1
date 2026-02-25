import test from "node:test";

export async function login (page) {
    await page.click('.signIn.black-text');
    await page.waitForTimeout(5000);
}