import { expect } from "@playwright/test";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function videoPlayer(page) {
    loadPage(page);
    await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");  
    await page.mouse.wheel(0, 250);
    const videoTitle = await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').textContent();
    await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').click();
    let fullTitle = 'https://live.fwfg.gizmott.com/show-details/' + videoTitle;
    let validURL = fullTitle.replaceAll(" ","-");
    let finalURL = validURL.toLowerCase();
    console.log(finalURL);
    await expect(page).toHaveURL(finalURL);
    await page.waitForTimeout(3000);
}