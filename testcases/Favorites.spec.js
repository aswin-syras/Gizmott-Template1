import { expect } from "@playwright/test";
import { firstVideo } from "../helpers/FirstVideo.spec";
import { navigateToFavorites } from "../helpers/PageNavigationHelper.spec.js";

export async function favorites(page) {
    const videoHeading = await navigateToFavorites(page);
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

export async function playlist(page) {
    const videoHeading = await navigateToFavorites(page);
    await page.getByRole('textbox', { name: 'Create New Playlist' }).click();
    await page.getByRole('textbox', { name: 'Create New Playlist' }).fill('New Playlist');
    await page.getByRole('button', { name: 'Create' }).click();
    await expect(page.getByText('New Playlist', { exact: true })).toBeVisible();
    await page.locator('p.playlist-item__name', { hasText: 'New Playlist' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

   // await expect(page.getByRole('button', { name: 'Remove from List' })).toBeVisible();
    await page.goto(`${process.env.BASE_URL}my-list`);
    await expect(page.getByRole('heading', { name: videoHeading, exact: true })).toBeVisible();

    await page.goto(process.env.BASE_URL);
    await firstVideo(page);
    await page.getByRole('button', { name: 'Remove from List' }).click();
    await page.getByRole('checkbox', { name: 'New Playlist' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('button', { name: 'Add to List' })).toBeVisible();
    await page.goto(`${process.env.BASE_URL}my-list`);
    await page.getByTitle('Delete Playlist').getByRole('img').click();
    await expect(page.getByRole('paragraph').filter({ hasText: 'New Playlist' })).toBeVisible();
    await page.locator('p.playlist-item__name', { hasText: 'New Playlist' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.locator('span ', { hasText: 'Delete' }).click();
    await page.goto(`${process.env.BASE_URL}my-list`);
    await expect(page.getByRole('heading', { name: 'New Playlist', exact: true })).not.toBeVisible();

}