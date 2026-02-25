// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://live.fwfg.gizmott.com/');
  // Expect a title "to contain" a substring.
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle('Find What Feels Good');
  await page.waitForTimeout(5000);
});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//   //await page.waitForTimeout(3000);
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
