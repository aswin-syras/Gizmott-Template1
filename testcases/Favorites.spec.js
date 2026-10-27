import { loadPage } from "./PageLoad.spec";
import { login } from "../helpers/Login.spec.js";
import { firstVideo } from "../helpers/FirstVideo.spec";


export async function favorites(page){
    await loadPage(page);
    await login(page, process.env.LEGACY_SUB_USERNAME, process.env.LEGACY_SUB_PASSWORD);
    await firstVideo(page);
    await page.getByRole('button', { name: 'Add to List' }).click();
    await page.getByRole('checkbox', { name: 'Favorites' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000);
    const isFavorite = await page.getByRole('button', { name: 'Remove from List' }).isVisible();
    if (isFavorite) {
        console.log('--✅ Video added to favorites successfully--');
    }else{
        console.log('--❌ Failed to add video to favorites--');
    }
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