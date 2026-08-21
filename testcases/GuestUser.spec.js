import { expect } from "@playwright/test";
import { loadPage } from "./PageLoad.spec";
import { searchQuery } from "../helpers/SearchQuery.spec.js";    

export async function guestUser(page){
    await loadPage(page);
    //Scroll and Click
    const firstVideo=page.locator('.showCardContainer').first();
    await firstVideo.waitFor({state:'visible',timeout:5000});
    await firstVideo.click();
    //Click Watch Now
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    //Validate final URL
    await expect(page).toHaveURL(`${process.env.BASE_URL}login`,{timeout:10000});
    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForURL(`${process.env.BASE_URL}`);
    await searchQuery(page,'dsghdj');
}

