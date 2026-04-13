import { showdetailsValidation } from "./CheckUrl.spec";

export async function firstVideo(page) {
    await page.mouse.wheel(0, 250);
    const videoTitle = await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').textContent();
    await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').click();
    await showdetailsValidation(page, videoTitle);
}