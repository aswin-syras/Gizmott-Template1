import { page, expect } from '@playwright/test'


export async function search(page) {
    const keywords = ['Open and Release', 'Goodnight Sound Bath', 'Curvy-friendly Flow', 'Body Scan Meditation', 'Pilates for Desk Jobs', 'Workout with Aaron - Strong Back', 'What Lives on Repeat - March 2026 Members Vlog', 'Throat Chakra Sound Bath', 'Breathwork with Kris: Emotional Release', 'Breathing Room: 7-Video Series', 'Portraits of Practice: Marnie Castor', 'Kids Yoga: Calm', 'Flow - A 30 Day Yoga Journey', 'TEND - April 2026', 'Yoga For Beginners', 'Find Your Flow', 'hjkhkjhlk'];
    const patterns = [/Open and Release/i, /Goodnight Sound Bath/i, /Curvy-.*/i, /Body Scan Meditation/i, /Pilates for Desk Jobs/i, /Workout with Aaron - .*/i, /What Lives on Repeat - .*/i, /Throat Chakra Sound Bath/i, /Breathwork with Kris: .*/i, /Breathing Room: .*/i, /Portraits of Practice: .*/i, /Kids Yoga: .*/i, /Flow - .*/i, /TEND - .*/i, /Yoga For Beginners/i, /Find Your Flow/i, /hjkhkjhlk/i];
    for (const [i, word] of keywords.entries()) {
        const searchBar = page.getByPlaceholder('Search').first();
        await searchBar.fill(word);
        await page.keyboard.press('Enter');
        await page.waitForLoadState('networkidle');

        const resultHeading = page.getByRole('heading').filter({ hasText: patterns[i] }).nth(1);
         const nodata = page.getByRole('heading', { name: 'No data found' });
         await Promise.race([
        resultHeading.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {}),
        nodata.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {})
    ]);
        if (await resultHeading.isVisible()) {
            console.log(`Search result "${word}" is correct`);
        }
        else if(nodata.isVisible()){
            console.log(`No data found for:${word}`);
        }
        else
        {
            console.log(`Search failed or took too long for:${word}`);
        }
        await searchBar.clear();
    }
}