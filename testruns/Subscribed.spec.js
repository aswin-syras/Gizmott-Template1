import test from "node:test";
import { login } from "../pages/Login.spec";
import { loadPage } from "../helpers/PageLoad.spec";

export function subscribedUser(page){
test('Subscribed user', async ({ page }) => {
  loadPage(page);
  await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");
});
}