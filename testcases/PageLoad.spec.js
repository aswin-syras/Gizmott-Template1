import { expect } from "@playwright/test";
import test from "node:test";

export async function loadPage(page) {
    await page.goto('/');
    await expect(page).toHaveTitle('Find What Feels Good');
    await page.waitForTimeout(3000);
}
