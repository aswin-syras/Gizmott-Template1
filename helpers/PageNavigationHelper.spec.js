import { expect } from '@playwright/test';

export async function navigateToCommunity(page, context){
    const pagePromise = context.waitForEvent('page');
    await page.locator('span', { hasText: 'Community' }).first().click();
    await page.waitForTimeout(3000);
    const newTab = await pagePromise;
    await newTab.waitForLoadState(); 
    await expect(newTab).toHaveURL(`${process.env.BASE_URL}/community`);
    await expect(newTab.locator('span', { hasText: 'Create' })).toBeVisible();
}

export async function navigateToCalendar(page){
    await page.locator('span', { hasText: 'Calendar' }).first().click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(`${process.env.BASE_URL}/calendar`);
    await expect(page.locator('.add-video-btn.not-gaia',)).toBeVisible();
}

