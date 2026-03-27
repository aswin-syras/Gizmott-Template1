import test from "node:test";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function unsubUserLogin(page){
  await loadPage(page);
  await login(page, "thomas@gmail.com", "Temp@123");
}