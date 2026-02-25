import { test, expect } from '@playwright/test';
import { login } from '../pages/Login.spec';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Find What Feels Good');
  await page.waitForTimeout(3000);
  await login(page);
});
