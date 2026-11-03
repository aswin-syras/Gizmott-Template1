import { expect } from '@playwright/test';
import { loadPage } from '../testcases/PageLoad.spec.js';
import { login } from './Login.spec.js';
import { firstVideo } from './FirstVideo.spec.js';

export async function navigateToCommunity(page, context){
    const pagePromise = context.waitForEvent('page');
    await page.locator('span', { hasText: 'Community' }).first().click();
    await page.waitForTimeout(3000);
    const newTab = await pagePromise;
    await newTab.waitForLoadState(); 
    await expect(newTab).toHaveURL(`${process.env.BASE_URL}community`);
    await expect(newTab.locator('span', { hasText: 'Create' })).toBeVisible();
}

export async function navigateToCalendar(page){
    await page.locator('span', { hasText: 'Calendar' }).first().click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(`${process.env.BASE_URL}calendar`);
    await expect(page.locator('.add-video-btn.not-gaia',)).toBeVisible();
}

export async function navigateToFavorites(page){
    await loadPage(page);
    await login(page, process.env.LEGACY_SUB_USERNAME, process.env.LEGACY_SUB_PASSWORD);
    const videoHeading = (await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').innerText()).trim();
    await firstVideo(page);
    await page.getByRole('button', { name: 'Add to List' }).click();
    return videoHeading;
}

