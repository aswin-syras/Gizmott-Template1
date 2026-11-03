import { expect } from "@playwright/test";
import { loadPage } from "./PageLoad.spec";
import { login } from "../helpers/Login.spec.js";
import { firstVideo } from "../helpers/FirstVideo.spec";

export async function favorites(page) {
    await loadPage(page);
    await login(page, process.env.LEGACY_SUB_USERNAME, process.env.LEGACY_SUB_PASSWORD);
    const videoHeading = (await page.locator('//*[@id="main"]/div[7]/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div[3]/h1').textContent())?.trim();
    await firstVideo(page);
    await page.getByRole('button', { name: 'Add to List' }).click();
    await page.getByRole('checkbox', { name: 'Favorites' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByRole('button', { name: 'Remove from List' })).toBeVisible();
    await page.goto(`${process.env.BASE_URL}my-list`);
    await expect(page.getByRole('heading', { name: videoHeading, exact: true })).toBeVisible();

    await page.goto(process.env.BASE_URL);
    await firstVideo(page);
    await page.getByRole('button', { name: 'Remove from List' }).click();
    await page.getByRole('checkbox', { name: 'Favorites' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByRole('button', { name: 'Add to List' })).toBeVisible();
}