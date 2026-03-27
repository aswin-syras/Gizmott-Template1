import { expect } from '@playwright/test'; // Added expect import
import { loadPage } from './PageLoad.spec';
import { login } from '../pages/Login.spec';

export async function unsubscribedUser(page) {
        loadPage(page);
        // const username=page.locator('.light-email');
        // await username.fill('thomas@gmail.com');  
        // await page.locator('input[type=password]').fill("Temp@123");
        
        // // Click Sign In
        // await page.getByRole('button', { name: 'Sign In', exact: true }).click();
        // await page.waitForURL('./'); 
        await login(page, "thomas@gmail.com", "Temp@123");
        
        // Scroll and Click
        await page.locator('.title').first().click();
        await page.getByLabel('Show Main Info').getByText('Watch Now').click();
        
        
        // Validate final URL
        await expect(page).toHaveURL('https://live.fwfg.gizmott.com/checkout', { timeout: 10000 });
}
