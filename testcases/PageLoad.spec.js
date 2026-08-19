import { test, expect } from "@playwright/test";

export async function loadPage(page) {
    await page.goto('/');
    //await expect(page).toHaveTitle('Find What Feels Good');
    await page.waitForTimeout(5000);
}
