import { expect } from '@playwright/test'; // Added expect import
import { loadPage } from './PageLoad.spec';
import { login } from '../pages/Login.spec';

export async function unsubscribedUser(page) {
        loadPage(page);
        await login(page, "thomas@gmail.com", "Temp@123");

        // Scroll and Click
        const firstVideo = page.locator('.showCardContainer').first();
        await firstVideo.waitFor({ state: 'visible', timeout: 5000 });
        await firstVideo.click();

        //Click Watch Now
        await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();

        // Validate final URL
        await expect(page).toHaveURL('https://live.fwfg.gizmott.com/checkout', { timeout: 10000 });
}
