import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { Routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuModule } from './main-menu/main-menu.module';
import { LoginComponent } from './login/login.component';
import { AuthServiceLoginService } from './login/auth-service-login.service';
import { FormsModule } from '@angular/forms';

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
    Routing, FormsModule
  ],
  providers: [AuthServiceLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor(){}




}
