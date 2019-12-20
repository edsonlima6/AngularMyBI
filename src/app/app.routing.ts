import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
//    { path: '', component: AppComponent},
   //{ path: 'login', component: LoginComponent}, 
   //{ path: 'main-page', component: MainPageComponent}
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
