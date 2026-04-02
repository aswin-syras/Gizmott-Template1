export async function logout(page){
    await page.getByRole('button',{hasText:'Hi'}).click();
    await page.getByText('Sign Out').waitFor({state:'visible'});
    await page.getByText('Sign Out').click();
}