import { loadPage } from "./PageLoad.spec";
import {navigateToCalendar} from "../helpers/PageNavigationHelper.spec.js";

export async function openCalendar(page){
    await loadPage(page);
    await navigateToCalendar(page);
}