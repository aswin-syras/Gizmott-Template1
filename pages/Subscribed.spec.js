import test from "node:test";

export async function subscribedUser(page){
    const username = page.locator('.light-email');
    await username.fill('richieblackmore03@gmail.com');  
    await page.locator('input[type=password]').fill("Aswinsyras@1234");
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.getByText('Hi, Richie').click();
    await page.getByText('Sign Out').click();
    await page.waitForTimeout(5000);
    await page.getByText('Sign In').click()
}