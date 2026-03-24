import test from "node:test";

export async function unsubscribedUser(page){
    const username = page.locator('.light-email');
    await username.fill('thomas@gmail.com');  
    await page.locator('input[type=password]').fill("Temp@123");
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
}
