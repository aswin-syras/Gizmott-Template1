import { page, expect } from '@playwright/test'


export async function search(page) {
    const keywords = ['Open and Release', 'Goodnight Sound Bath', 'Curvy-friendly Flow', 'Body Scan Meditation', 'Pilates for Desk Jobs', 'Workout with Aaron - Strong Back', 'What Lives on Repeat - March 2026 Members Vlog', 'Throat Chakra Sound Bath', 'Breathwork with Kris: Emotional Release', 'Breathing Room: 7-Video Series', 'Portraits of Practice: Marnie Castor', 'Kids Yoga: Calm', 'Flow - A 30 Day Yoga Journey', 'TEND - April 2026', 'Yoga For Beginners', 'Find Your Flow', 'hjkhkjhlk'];
    for (const word of keywords) {
        await page.pause();
        const searchBar = page.getByPlaceholder('Search').first();
        await searchBar.fill(word);
        await page.keyboard.press('Enter');
        await page.waitForLoadState('networkidle');
        const actualTitle = await page.title();
        await expect(page).getByText(new RegExp(`${word}.*`, 'i'));

    }
}