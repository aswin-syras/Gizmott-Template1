

export async function searchQuery(page, searchItem) {
    const searchInput = page.locator('input.white-bg').first();
    await searchInput.waitFor({ state: 'visible', timeout: 5000 });
    await searchInput.fill(searchItem);
    await searchInput.press('Enter');
    await page.waitForLoadState('networkidle');
    try{
        const currenturl = page.url().toLowerCase();
        const simplifiedsearchItem = searchItem.toLowerCase().replace(' ', '-');
        const hasResults = await page.locator('h1.title').getByText(searchItem, { exact: true }).first().isVisible();
        if (currenturl.includes('search') && currenturl.includes(simplifiedsearchItem.split('')[0]) && hasResults)
            {
                console.log(`Search successful for '${searchItem}' and URL is correct`);
            }
        else 
            {
                console.log(`No data found for '${searchItem}'`);
            }
        }
        catch (error) 
        {
            console.log('Error during search validation:',error.message);
        }
    }
    
