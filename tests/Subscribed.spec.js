import {test,expect} from '@playwright/test';
import { navigateToFWFGHomepage } from '../pages/HomePage';

test('Subscribed user login validation',async({page})=>{
    await navigateToFWFGHomepage(page);
    await page.getByPlaceholder('Email').fill('max@gmail.com');
    await page.getByPlaceholder('Password').fill('Temp@123');
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(page).toHaveURL('https://live.fwfg.gizmott.com/videos/unconditional-love')
});

