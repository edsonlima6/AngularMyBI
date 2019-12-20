// import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from '../usuario.component';
import { UsuarioDetalheComponent } from '../usuario-detalhe/usuario-detalhe.component';
import { UsuarioRoutingModule } from '../usuario-module/usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
    UsuarioRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UsuarioComponent,
    UsuarioDetalheComponent
  ]
})
export class UsuarioModuleModule { }
