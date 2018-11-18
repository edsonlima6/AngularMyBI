import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UsuarioComponent } from '../usuario.component';
import { UsuarioDetalheComponent } from '../usuario-detalhe/usuario-detalhe.component';

// const routes: Routes = [];
const routes: Routes = [
  //    { path: '', component: AppComponent},
     { path: '', component: UsuarioComponent, children: [
        { path: ':id', component: UsuarioDetalheComponent}
        
        ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule { }
