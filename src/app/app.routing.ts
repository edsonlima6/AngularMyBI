import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
//    { path: '', component: AppComponent},
   { path: 'login', component: LoginComponent}
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
