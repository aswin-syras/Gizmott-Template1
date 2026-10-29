import { loadPage } from "./PageLoad.spec";
import { login } from "../helpers/Login.spec.js";
import { firstVideo } from "../helpers/FirstVideo.spec";

export async function favorites(page){
    await loadPage(page);
    await login(page, process.env.LEGACY_SUB_USERNAME, process.env.LEGACY_SUB_PASSWORD);
    await firstVideo(page);
    let videoHeading = await page.getByRole('heading', { name: 'Yoga Red Riding Hood' }).textContent();
    await page.getByRole('button', { name: 'Add to List' }).click();
    await page.getByRole('checkbox', { name: 'Favorites' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    const isFavorite = await page.getByRole('button', { name: 'Remove from List' }).isVisible();
    if (isFavorite) {
        console.log('--✅ Video added to favorites successfully--');
    }else{
        console.log('--❌ Failed to add video to favorites--');
    }
    await page.goto(`${process.env.BASE_URL}my-list`);
    await page.waitForTimeout(1000);
    let myListHeading = await page.getByRole('heading', { name: videoHeading }).textContent();
    if (myListHeading === videoHeading) {
        console.log('--✅ Video is present in My List--');
    }
    await page.getByRole('link', { name: 'Go to home page' }).click();
    await firstVideo(page);
    await page.getByRole('button', { name: 'Remove from List' }).click();
    await page.getByRole('checkbox', { name: 'Favorites' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000);
    const isRemoved = await page.getByRole('button', { name: 'Add to List' }).isVisible();
    if (isRemoved) {
        console.log('--✅ Video removed from favorites successfully--');
    }else{
        console.log('--❌ Failed to remove video from favorites--');
    }
}