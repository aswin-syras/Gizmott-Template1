import { test, expect } from '@playwright/test';
import { navigateToFWFGHomepage } from '../pages/HomePage.spec';

test('Guest user homepage flow', async ({ page }) => {
  await navigateToFWFGHomepage(page);

  await page.click('.watchNow');
  await expect(page).toHaveURL('https://live.fwfg.gizmott.com/login');
});