import { test, expect } from '@playwright/test';
import { login } from '../pages/Login.spec';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Find What Feels Good');
  await page.waitForTimeout(3000);
  //await login(page);
});

//URL Validation
test('Validate URL',async({page})=>{
  await page.goto('https://live.fwfg.gizmott.com/');
  await expect(page).toHaveURL('https://live.fwfg.gizmott.com/');
  await page.waitForTimeout(5000);
});
