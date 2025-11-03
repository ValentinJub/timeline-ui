import { Routes } from '@angular/router';
import {Home} from "./shared/components/home/home";
import {Dashboard} from "./shared/components/dashboard/dashboard";
import {Settings} from "./shared/components/settings/settings";
import { Sandbox } from './shared/components/sandbox/sandbox';

export const routes: Routes = [
  { path: '', component: Home},         // Default route
  { path: 'sandbox', component: Sandbox},
  { path: 'dashboard', component: Dashboard},
  { path: 'settings', component: Settings},
  { path: '**', component: Home }  // Wildcard route for a 404 page (redirects to home in this case)
];
