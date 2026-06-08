import { expect } from "playwright/test";

export async function showdetailsValidation(page, videoTitle) {
    let videoURL = `${process.env.BASE_URL}/show-details/${videoTitle}`;
    let videoTitleFormat = videoTitle.replace(/[:][^\/]*$/, '');
    let validURL = videoURL.replaceAll(" ","-");
    let finalURL = validURL.toLowerCase().replace(/[:][^\/]*$/, '');
    let receiveURL = page.url();
    let lasttext = receiveURL.split('/').pop().toLowerCase().replace(/[:][^\/]*$/, '');
    let titleForCompare = videoTitleFormat.toLowerCase();
    let textchange = lasttext.replaceAll("-", " ").toLowerCase();  

    console.log('              ');  
    console.log('textchange:', textchange);  
    console.log('titleForCompare:', titleForCompare);  
    console.log('              ');  

    try{
        await expect(page).toHaveURL(new RegExp(finalURL));
        console.log('--✅ Correct Video--');
    }catch(error){
        console.log('              ');  
        console.log('URL match failed moving to else statement');

        if (titleForCompare.includes(textchange) || textchange.includes(titleForCompare)) {
            console.log('--✅ Correct Video--');
            await expect(page.locator(".title-trailer")).toBeVisible();
        } else {
        console.log('--❌ Wrong Video--');
        console.log('Title formatted:', titleForCompare);
        console.log('Text formatted:', textchange);
    }
    }
    await page.waitForTimeout(3000);
}

export async function videoURLvalidation(page, videoName) {
  let videoURL = `${process.env.BASE_URL}/videos/${videoName}`;
    let videoTitleFormat = videoName.replace(/[:][^\/]*$/, '');
    let validURL = videoURL.replaceAll(" ","-");
    let finalURL = validURL.toLowerCase().replace(/[:][^\/]*$/, '');
    let receiveURL = page.url();
    let lasttext = receiveURL.split('/').pop().toLowerCase().replace(/[:][^\/]*$/, '');
    let titleForCompare = videoTitleFormat.toLowerCase();
    let textchange = lasttext.replaceAll("-", " ").toLowerCase();  

    console.log('              ');  
    console.log('textchange:', textchange);  
    console.log('titleForCompare:', titleForCompare);  
    console.log('              ');  

    try{
        await expect(page).toHaveURL(new RegExp(finalURL));
        console.log('--✅ Correct Video--');
    }catch(error){
        console.log('              ');  
        console.log('URL match failed moving to else statement');

        if (titleForCompare.includes(textchange) || textchange.includes(titleForCompare)) {
            console.log('--✅ Correct Video--');
            //await page.waitForTimeout(1000);
            //await expect(page.locator(".title-trailer")).toBeVisible();
            await page.mouse.wheel(0, 250);
            await expect(page.locator('.addtoList')).toBeVisible();
        } else {
        console.log('--❌ Wrong Video--');
        console.log('Title formatted:', titleForCompare);
        console.log('Text formatted:', textchange);
    }
    }
   // await page.waitForTimeout(3000);
}