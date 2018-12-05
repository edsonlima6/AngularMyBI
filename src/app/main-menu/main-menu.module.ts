import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// IF NECESSARY TO CREATE MODULE FOR ROUTES, FOLLOW ARRAY BELOW
const routes: Routes = [];

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
