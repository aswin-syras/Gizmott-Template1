import { login } from "../helpers/Login.spec";
import { logout } from "../helpers/Logout.spec";
import { loadPage } from "./PageLoad.spec";

export async function subscribedUser(page){
  await loadPage(page);
  await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);

   // Save state
    await page.context().storageState({ path: 'auth.json' });
    console.log('✅ Auth saved to auth.json');
    await logout(page);
}