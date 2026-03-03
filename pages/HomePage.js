import { test, expect } from '@playwright/test';
import { login } from './Login';
import { disableTransitions } from '../helpers/disableTransition';
// pages/HomePage.js

export async function navigateToFWFGHomepage(page) {
  await page.goto('/');

  await disableTransitions(page);

  await expect(page).toHaveTitle('Find What Feels Good');

  await page.click('.background');

  await page
    .getByLabel('Banner Slide 4')
    .getByRole('button', { name: 'Watch Now' })
    .click();

  await expect(page).toHaveURL(
    'https://live.fwfg.gizmott.com/show-details/unconditional-love'
  );
};