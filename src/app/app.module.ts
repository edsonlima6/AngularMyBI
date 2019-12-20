import { AlertifyService } from './class/Services/alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LoginComponent } from './login/login.component';
import { AuthServiceLoginService } from './login/auth-service-login.service';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './class/Interceptors/Index_Interceptor';
import { MainPageComponent } from './main-page/main-page.component';
// import { UsuarioModuleModule} from './usuario/usuario-module/usuario-module.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MainMenuModule,
    // Routing,
    // UsuarioModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthServiceLoginService, 
    httpInterceptorProviders, 
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor(){}




}
