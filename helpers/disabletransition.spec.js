import { Page } from '@playwright/test';

/**
 * Disable all CSS transitions and animations on the page.
 * Call this after navigating or in a beforeEach hook.
 */
export async function disableTransitions(page) {
  await page.addStyleTag({
    content: `
      * {
        transition: none !important;
        animation: none !important;
      }
    `,
  });
}