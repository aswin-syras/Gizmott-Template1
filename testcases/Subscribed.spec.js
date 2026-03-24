import test from "node:test";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function subUserLogin(page){
  await loadPage(page);
  await login(page, "richieblackmore03@gmail.com", "Aswinsyras@1234");
}