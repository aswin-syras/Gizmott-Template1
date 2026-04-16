import { login } from "../helpers/Login.spec";
import { logout } from "../helpers/Logout.spec";
import { loadPage } from "./PageLoad.spec";

export async function subscribedUser(page){
  await loadPage(page);
  await login(page, "richieblackmore03@gmail.com", "123456");

   // Save state
    await page.context().storageState({ path: 'auth.json' });
    console.log('✅ Auth saved to auth.json');
    await logout(page);
}