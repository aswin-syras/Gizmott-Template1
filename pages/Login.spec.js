import test from "node:test";

// export class LoginPage{
//     constructor(page) {
//     this.page = page;
//   }
// }

export async function login (page) {
    await page.locator('//*[@id="main"]/div[3]/div/div[2]/div[2]/button[2]').click();
    await page.waitForTimeout(5000);
}