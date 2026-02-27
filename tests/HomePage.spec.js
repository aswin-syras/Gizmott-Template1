import { test, expect } from '@playwright/test';
import { login } from '../pages/Login.spec';
import { disableTransitions } from '../helpers/disabletransition.spec.js';

test('Navigate to FWFG Homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Find What Feels Good');
  await page.waitForTimeout(5000);
  //await login(page);
  await page.click('.background');
  await page.getByLabel('Banner Slide 4').getByRole('button', { name: 'Watch Now' }).click();
  await expect(page).toHaveURL('https://live.fwfg.gizmott.com/show-details/unconditional-love')
  //await page.waitForTimeout(5000);

});