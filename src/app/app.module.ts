import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LoginComponent } from './login/login.component';
import { AuthServiceLoginService } from './login/auth-service-login.service';
import { FormsModule } from '@angular/forms';
import { UsuarioModuleModule } from './usuario/usuario-module/usuario-module.module';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe/usuario-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MainMenuModule,
    FormsModule,
    UsuarioModuleModule
  ],
  providers: [AuthServiceLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor(){}




}
