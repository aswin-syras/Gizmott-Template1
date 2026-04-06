import { expect } from "@playwright/test";
import { loadPage } from "./PageLoad.spec";

export async function guestUser(page){
    await loadPage(page);
    //Scroll and Click
    const firstVideo=page.locator('.showCardContainer').first();
    await firstVideo.waitFor({state:'visible',timeout:5000});
    await firstVideo.click();
    //Click Watch Now
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    //Validate final URL
        await firstVideo.click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/login`,{timeout:10000});

}