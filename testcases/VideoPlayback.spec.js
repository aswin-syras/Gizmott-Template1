import { expect } from "playwright/test";
import { videoURLvalidation } from "../helpers/CheckUrl.spec";
import { firstVideo } from "../helpers/FirstVideo.spec";
import { login } from "../helpers/Login.spec";
import { loadPage } from "./PageLoad.spec";
import { type } from "node:os";

export async function videoPlayer(page) {
    await loadPage(page);
    await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD); 
    await firstVideo(page);
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    const videoName = await page.locator('h1.videoTitle').first().textContent();
    console.log('Video Name:', videoName);
    await videoURLvalidation(page, videoName);
    const timer = await page.locator('span.vjs-remaining-time-display').textContent();
    console.log('\nVideo time:', timer);
    await page.waitForTimeout(1000); 
    await page.locator('button.vjs-big-play-button').click();
    await page.waitForTimeout(5000); // Play for 5 seconds
    const timerAfter5Seconds = await page.locator('span.vjs-remaining-time-display').textContent();
    console.log('Timer after 5 seconds:', timerAfter5Seconds);
    if (timer !== timerAfter5Seconds) {    
        console.log('\n--✅ Video is playing--');
        expect(true).toBe(true);
    } else {
        console.log('\n--❌ Video is not playing--');
        expect(timer).not.toBe(timerAfter5Seconds);
    }
}

export async function autoPlay(page){
    await loadPage(page);
    await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);
    await firstVideo(page);
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    await expect(page.getByRole('button', { name: 'Play Video', exact: true })).toBeVisible({ timeout: 5000 });
}

export async function seekFunctionality(page) {
    await loadPage(page);
    await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);  
    await firstVideo(page);
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    // Convert 03:52 into seconds (3 * 60 + 52 = 232)
    await page.locator('#vjs_video_player_html5_api').evaluate((video) => {
    video.currentTime = 232; // 03:52 converted to seconds (3 * 60 + 52)
    video.dispatchEvent(new Event('seeked', { bubbles: true }));
    });
    // Wait for the player loading text to disappear completely
    await page.locator('.vjs-control-text', { hasText: 'Video Player is loading.' }).waitFor({ state: 'hidden' });
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    await page.waitForTimeout(5000);
}