import { test, expect } from '@playwright/test';
import { login } from '../pages/Login.spec';
import { subscribedUser } from '../pages/Subscribed.spec.js';
import { disableTransitions } from '../helpers/disabletransition.spec.js';
import { unsubscribedUser } from '../pages/Unsubscribed.spec.js';

test('Navigate to FWFG Homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Find What Feels Good');
  await page.waitForTimeout(5000);
  await login(page);
  await subscribedUser(page);
  await unsubscribedUser(page);
  // await page.click('.background');
  // await page.getByLabel('Banner Slide 4').getByRole('button', { name: 'Watch Now' }).click();
  // await expect(page).toHaveURL("https://live.fwfg.gizmott.com/show-details/kids-yoga-calm");
  //await page.waitForTimeout(5000);
});