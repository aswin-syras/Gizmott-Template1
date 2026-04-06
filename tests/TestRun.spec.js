import { test, expect } from '@playwright/test';
import { loadPage } from '../testcases/PageLoad.spec.js';
import { subscribedUser } from '../testcases/Subscribed.spec.js';
import { videoPlayer } from '../testcases/VideoPlayback.spec.js';
import { unsubscribedUser } from '../testcases/Unsubscribed.spec.js';
import { guestUser } from '../testcases/GuestUser.spec.js';

 
  test('Page Load', async ({ page }) => {
    await loadPage(page);
  });

  test('Subscribed user', async ({ page }) => {
    await subscribedUser(page);
  });
 
  test('Video Player', async ({ page }) => {
    await videoPlayer(page);
  }); 
  
  test('Unsubscribed User',async({page})=>{
    await unsubscribedUser(page);
  })

  test ('Guest User',async({page})=>{
    await guestUser(page);
  })

  test('Create auth state', async ({ page, context }) => {
    const username = 'richieblackmore03@gmail.com';
    const password = 'Aswinsyras@1234';
    await page.goto('https://fwfg.com/');
    await page.click('.signIn.black-text');
    const userfield = page.locator('.light-email');
    const uname = await userfield.fill(username); 
    const pwd = await page.locator('input[type=password]').fill(password); 
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(3000);
    
    // Creates auth.json
    await context.storageState({ path: './auth.json' });
});
