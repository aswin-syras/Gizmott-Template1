import { test, expect } from '@playwright/test';
import { login } from '../pages/Login.spec.js';
import { loadPage } from '../testcases/PageLoad.spec.js';
import { subUserLogin } from '../testcases/Subscribed.spec.js';
import { videoPlayer } from '../testcases/VideoPlayback.spec.js';
import {unsubUserLogin} from '../testcases/Unsubscribed.spec.js';
 
  test('Page Load', async ({ page }) => {
    await loadPage(page);
  });

  test('Subscribed user', async ({ page }) => {
    await subUserLogin(page);
  });
 
  test('Video Player', async ({ page }) => {
    await videoPlayer(page);
  });

  test.only('Unsubscribed user',async({page})=> {
  await unsubUserLogin(page);
});

  //await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");
  // await subscribedUser(page);
  // await page.click('.background');
  // await page.getByLabel('Banner Slide 4').getByRole('button', { name: 'Watch Now' }).click();
  // await expect(page).toHaveURL("https://live.fwfg.gizmott.com/show-details/kids-yoga-calm");
  //await page.waitForTimeout(5000);
