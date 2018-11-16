import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from '../usuario.component';
import { UsuarioDetalheComponent } from '../usuario-detalhe/usuario-detalhe.component';

const routes: Routes = [
     { path: 'usuario', component: UsuarioComponent, children: [
      {path: ':id', component: UsuarioDetalheComponent}

     ]}
  ];


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModuleModule { }
