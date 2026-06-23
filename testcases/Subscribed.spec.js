import { login } from "../helpers/Login.spec";
import { logout } from "../helpers/Logout.spec";
import { loadPage } from "./PageLoad.spec";
import { firstVideo } from "../helpers/FirstVideo.spec";

export async function subscribedUser(page){
  await loadPage(page);
  await login(page, process.env.SUB_USERNAME, process.env.SUB_PASSWORD);
  await firstVideo(page);
  await page.getByRole('button',{name:'Watch Now',exact:true}).first().click();
  const URLvideo = await page.url();
  const checkurl = URLvideo.includes(`${process.env.BASE_URL}/videos/`);
  if(checkurl){
    console.log('--✅ Subscribed user able to watch video--');
  }else{
    console.log('--❌ Subscribed user not able to watch video--');
  } 
   // Save state
    await page.context().storageState({ path: 'auth.json' });
    console.log('✅ Auth saved to auth.json');
    await logout(page);
}