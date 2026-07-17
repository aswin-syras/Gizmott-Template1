import { login } from "../helpers/Login.spec";
import { logout } from "../helpers/Logout.spec";
import { loadPage } from "./PageLoad.spec";
import { firstVideo } from "../helpers/FirstVideo.spec";
import { expect } from "@playwright/test";

export async function subscribedUser(page){
  await loadPage(page);
  await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);
  await firstVideo(page);
  await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
  const URLvideo = await page.url();
  const checkurl = URLvideo.includes(`${process.env.BASE_URL}/videos/`);
  if(checkurl){
    console.log('--✅ Subscribed user able to watch video--');
  }else{
    console.log('--❌ Subscribed user not able to watch video--');
  } 
   // Save state
    await page.context().storageState({ path: 'auth.json' });
    console.log('✅ Auth saved to auth.json');
    await logout(page);
}

export async function legacySubscription(page){
  await loadPage(page);
  await login(page, process.env.LEGACY_SUB_USERNAME, process.env.LEGACY_SUB_PASSWORD);
  await firstVideo(page);
  await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
  const URLvideo = await page.url();
  const checkurl = URLvideo.includes(`${process.env.BASE_URL}/videos/`);
  if(checkurl){
    console.log('--✅ Legacy user able to watch video--');
  }else{
    console.log('--❌ Legacy user not able to watch video--');
  } 
}

export async function emailLogin(page, uniqueTestEmail, mailosaur, SERVER_ID) {

    await loadPage(page);
    await page.click('.signIn.black-text');
    await page.getByRole('button', { name: 'Sign in via Email', exact: true }).first().click();
    await page.locator('//*[@id="email"]').fill(uniqueTestEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    // 2. Fetch email via API
    const email = await mailosaur.messages.get(SERVER_ID, {
      sentTo: uniqueTestEmail
    }, { timeout: 30000 });

    // 3. Extract the first link found in the email HTML text [1]
    const magicLink = email.html.links[0].href;

  // 4. Navigate directly to the login link to authenticate [1]
    await page.goto(magicLink);

  // This asserts that the URL contains the loginRequest path
  await expect(page).toHaveURL(/.*fwfg\.com\/loginRequest.*/);
  await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(4000);
  const name = await page.locator('h4').first().textContent();
  console.log(name);
}