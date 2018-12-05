import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [];
const routes: Routes = [
    //    { path: '', component: AppComponent},
    // lazy load can't to be in any module and must follow tha default UsuarioModule
     {path: 'usuario', loadChildren: './usuario/usuario-module/usuario-module.module#UsuarioModuleModule'},
     { path: 'login', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
