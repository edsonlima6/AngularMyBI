import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuComponent } from './main-menu.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Routes , RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  //    { path: '', component: AppComponent},
    //  {path: 'usuario', loadChildren: './usuario/usuario-module/usuario-module.module#UsuarioModuleModule'},
    //  { path: 'login', component: LoginComponent}
  ];

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(), 
    CollapseModule.forRoot(), 
    RouterModule.forChild(routes)
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule { }
