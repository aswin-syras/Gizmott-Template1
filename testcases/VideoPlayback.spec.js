import { expect } from '@playwright/test';
import {videoValid} from '../testcases/VideoValidation.spec.js';
import { login } from '../pages/Login.spec.js';
import { loadPage } from '../testcases/PageLoad.spec.js';

export async function videoPlayer(page) {
    await loadPage(page);
    login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");
    await videoValid(page);
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/videos/`, { timeout: 5000 });
}