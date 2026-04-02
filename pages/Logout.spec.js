export async function logout(page){
    await page.getByRole('button',{name:'Open user menu'}).click();
    await page.getByText('Sign Out').waitFor({state:'visible'});
    await page.getByText('Sign Out').click();
}