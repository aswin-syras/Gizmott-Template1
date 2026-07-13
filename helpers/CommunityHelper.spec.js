import { expect } from '@playwright/test';

export async function navigateToCommunity(page, context){
    const pagePromise = context.waitForEvent('page');
    await page.locator('span', { hasText: 'Community' }).first().click();
    await page.waitForTimeout(3000);
    const newTab = await pagePromise;
    await newTab.waitForLoadState(); 
    await expect(newTab).toHaveURL(`${process.env.BASE_URL}/community`);
}