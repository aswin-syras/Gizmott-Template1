import { expect } from "@playwright/test";
import { loadPage } from "./PageLoad.spec";
import { login } from "../helpers/Login.spec.js";
import { navigateToCommunity } from "../helpers/CommunityHelper.spec.js";

export async function subUsercommunityAccess(page,  context) {
    await loadPage(page);
    await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);
    await navigateToCommunity(page, context);
    console.log('--✅ Subscribed user able to access community--');
}

export async function unsubUsercommunityAccess(page,  context) {
    await loadPage(page);
    await login(page, process.env.UNSUB_USERNAME, process.env.UNSUB_PASSWORD);
    const pagePromise = context.waitForEvent('page');
    await page.locator('span', { hasText: 'Community' }).first().click();
    await page.waitForTimeout(3000);
    const newTab = await pagePromise;
    await newTab.waitForLoadState(); 
    await expect(newTab).toHaveURL(`${process.env.BASE_URL}/checkout`);
    console.log('--✅ Unsubscribed users navigate to checkout --');
}

