import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
   { path: 'Home', component: AppComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
