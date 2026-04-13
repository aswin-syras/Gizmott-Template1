import { firstVideo } from "../pages/FirstVideo.spec";
import { login } from "../pages/Login.spec";
import { loadPage } from "./PageLoad.spec";

export async function videoPlayer(page) {
    await loadPage(page);
    await login(page, "richieblackmore03@gmail.com", "123456"); 
    await firstVideo(page);
    await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
   // await urlValidation(page);
}