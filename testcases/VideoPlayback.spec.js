import { expect } from "@playwright/test";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function videoPlayer(page) {
    loadPage(page);
    //await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");  
    await page.mouse.wheel(0, 250);
    const videoTitle = await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').textContent();
    await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').click();
    let fullTitle = 'https://live.fwfg.gizmott.com/show-details/' + videoTitle;
    let videoTitleFormat = videoTitle.replace(/[:][^\/]*$/, '');
    let validURL = fullTitle.replaceAll(" ","-");
    let finalURL = validURL.toLowerCase().replace(/[:][^\/]*$/, '');
    let receiveURL = page.url();
    let lasttext = receiveURL.split('/').pop().toLowerCase().replace(/[:][^\/]*$/, '');
    console.log('URL slug:', lasttext);  // "upper-spine-posture"

    let titleForCompare = videoTitleFormat.toLowerCase();
    let textchange = lasttext.replaceAll("-", " ");  

    console.log(videoTitleFormat + " = " + textchange);

    if(    await expect(page).toHaveURL(new RegExp(finalURL))){
        console.log('--✅ Correct Video--');
    }
    else if (textchange.includes(titleForCompare)) {
        console.log('--✅ Correct Video--');
        await expect(page.locator(".title-trailer")).toBeVisible();
    } else {
        console.log('--❌ Wrong Video--');
        console.log('Title formatted:', titleForCompare);
        console.log('Slug formatted:', textchange);
    }
    await page.waitForTimeout(3000);
}
