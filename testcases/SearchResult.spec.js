import { page, expect } from '@playwright/test'


export async function search(page) {
const keywords = ['Open and Release', 'Goodnight Sound Bath', 'Curvy-friendly Flow', 'Body Scan Meditation', 'Pilates for Desk Jobs', 'Workout with Aaron - Strong Back', 'What Lives on Repeat - March 2026 Members Vlog', 'Throat Chakra Sound Bath', 'Breathwork with Kris: Emotional Release', 'Breathing Room: 7-Video Series', 'Portraits of Practice: Marnie Castor', 'Kids Yoga: Calm', 'Flow - A 30 Day Yoga Journey', 'TEND - April 2026', 'Yoga For Beginners', 'Find Your Flow'];

const patterns = [/Open and Release/i, /Goodnight Sound Bath/i, /Curvy.*/i, /Body Scan Meditation/i, /Pilates for Desk Jobs/i, /Workout with Aaron/i, /What Lives on Repeat/i, /Throat Chakra Sound Bath/i, /Breathwork with Kris/i, /Breathing Room/i, /Portraits of Practice/i, /Kids Yoga/i, /Flow - A 30 Day/i, /TEND - April/i, /Yoga For Beginners/i, /Find Your Flow/i, /hjkhkjhlk/i];

const searchBar = page.getByPlaceholder('Search').first();

for (const [i, word] of keywords.entries()) {
    try {
        // Search
        await searchBar.clear();
        await searchBar.fill(word);
        await page.keyboard.press('Enter');
        await page.waitForLoadState('networkidle');

        const resultHeading = page.getByRole('heading').filter({ hasText: patterns[i] }).nth(1);
        //const nodata = page.getByRole('heading', { name: 'No data found' });

        await Promise.race([
            resultHeading.waitFor({ state: 'visible', timeout: 5000 }),
            //nodata.waitFor({ state: 'visible', timeout: 5000 })
        ]);

        if (await resultHeading.isVisible()) {
            console.log(`✅ "${word}" FOUND`);
        } else {
            const nodata = page.getByRole('heading', { name: 'No data found' });
            await expect(nodata).toBeVisible();
            console.log(`"${word}" → No results`);
        }

    } catch (error) {
        const nodata = page.getByRole('heading', { name: 'No data found' });
        await expect(nodata).toBeVisible();
        console.log(`❌ "${word}" → No results`);
    }
}
}