import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {Dashboard} from "./dashboard/dashboard";
import {Settings} from "./settings/settings";

export const routes: Routes = [
    { path: '', component: Home},         // Default route
    { path: 'dashboard', component: Dashboard},
    { path: 'settings', component: Settings},
];
