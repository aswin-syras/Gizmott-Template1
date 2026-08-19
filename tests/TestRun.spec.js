import { test } from '@playwright/test';
import { loadPage } from '../testcases/PageLoad.spec.js';
import { subscribedUser } from '../testcases/Subscribed.spec.js';
import { unsubscribedUser } from '../testcases/Unsubscribed.spec.js';
import { guestUser } from '../testcases/GuestUser.spec.js';
import { search } from '../testcases/SearchResult.spec.js';
import { autoPlay, videoPlayer } from '../testcases/VideoPlayback.spec.js';
import { legacySubscription } from '../testcases/Subscribed.spec.js';
import { seekFunctionality } from '../testcases/VideoPlayback.spec.js';
import { subUsercommunityAccess } from '../testcases/Community.spec.js';
import { unsubUsercommunityAccess } from '../testcases/Community.spec.js';
import { openCalendar } from '../testcases/Calendar.spec.js';
const MailosaurClient = require('mailosaur');
require('dotenv').config();
import { emailLogin } from '../testcases/Subscribed.spec.js';
 
  test('Page Load', async ({ page }) => {
    await loadPage(page);
  });

  test.skip('Create auth state', async ({ page, context }) => {
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

  test('Subscribed user', async ({ page }) => {
    await subscribedUser(page);
  });

  test('Legacy Subscription', async ({ page }) => {
    await legacySubscription(page);
  });
  
  test('Unsubscribed User',async({page})=>{
    await unsubscribedUser(page);
  })

  test('Guest User',async({page})=>{
    await guestUser(page);
  })

  test('Calendar Page Load', async ({ page }) => {
    await openCalendar(page);
  });

  test('Autoplay', async ({ page }) => {
    await autoPlay(page);
  });

  test('Video Player', async ({ page }) => {
    test.setTimeout(100000);
    await videoPlayer(page);
  }); 

  test('Seek Functionality', async ({ page }) => {
    test.setTimeout(100000);
    await seekFunctionality(page);
  });

  test('Community Access For Subscribed Users', async ({ page, context }) => {
    await subUsercommunityAccess(page,context);
  });

  test('Community Access For Unsubscribed Users', async ({ page, context }) => {
    await unsubUsercommunityAccess(page,context);
  });

  test('Search Functionality', async ({ page }) => {
    test.setTimeout(100000); // Set timeout to 2 minutes for this test
    await loadPage(page);
    await search(page);
     });

  test.skip('Email Sign-in', async ({ page }) => {
    const SERVER_ID = process.env.MAILOSAUR_SERVER_ID;
    const SERVER_DOMAIN = `${SERVER_ID}.mailosaur.net`;
    const API_KEY = process.env.MAILOSAUR_API_KEY;
    const mailosaur = new MailosaurClient(API_KEY);
    //const uniqueTestEmail = `user-${Date.now()}@${SERVER_DOMAIN}`;
    const uniqueTestEmail = `testmail@${SERVER_ID}.mailosaur.net`;
    await emailLogin(page, uniqueTestEmail, mailosaur, SERVER_ID);
  });
