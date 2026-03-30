import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function subscribedUser(page){
  await loadPage(page);
  await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");

   // Save state
    await page.context().storageState({ path: 'auth.json' });
    console.log('✅ Auth saved to auth.json');
}