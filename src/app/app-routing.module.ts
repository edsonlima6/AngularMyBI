import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

// const routes: Routes = [];
const routes: Routes = [
    //    { path: '', component: AppComponent},
    // lazy load can't to be in any module and must follow tha default UsuarioModule
     {path: 'usuario', loadChildren: () => import('./usuario/usuario-module/usuario-module.module').then(m => m.UsuarioModuleModule)},
     { path: 'login', component: LoginComponent}, 
     { path: 'main-page', component: MainPageComponent},
     {path: '', redirectTo: '/main-page', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
