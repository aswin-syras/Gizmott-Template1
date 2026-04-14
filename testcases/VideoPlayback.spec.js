import { videoURLvalidation } from "../pages/CheckUrl.spec";
import { firstVideo } from "../pages/FirstVideo.spec";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function videoPlayer(page) {
    await loadPage(page);
    await login(page, "richieblackmore03@gmail.com", "123456"); 
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
    } else {
        console.log('\n--❌ Video is not playing--');
    }
}