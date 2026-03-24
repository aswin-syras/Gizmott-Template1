import test from "node:test";

export async function login (page, username, password) {
    await page.click('.signIn.black-text');
    const userfield = page.locator('.light-email');
    const uname = await userfield.fill(username); 
    const pwd = await page.locator('input[type=password]').fill(password); 
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(3000);
}