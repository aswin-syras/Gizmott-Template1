import {test,expect} from '@playwright/test';
import { navigateToFWFGHomepage } from '../pages/HomePage';

test('Unsubscribed User Login check',async({page})=>{
    await navigateToFWFGHomepage(page);
    await page.getByPlaceholder('Email').fill('ryan@gmail.com');
    await page.getByPlaceholder('Password').fill('Temp@123');
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(page).toHaveURL('https://live.fwfg.gizmott.com/videos/unconditional-love')
});