import { Usuario } from './../class/usuario';
import { Component, OnInit } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submited: boolean;
  dismissOnTimeout: number;
  dismissible: boolean;
  isLogged: boolean;
  sMsgRet: string;

  constructor(private authService: AuthServiceLoginService) {

  }

  ngOnInit() {
    this.isLogged = false;
    this.dismissible = true;
    this.dismissOnTimeout = 3500;
    this.authService.updateValue.subscribe(islogado => this.isLogged = islogado);
  }


  oClick(form: Form) {

    // console.log(this.usuario.email);
    this.authService.ValidaLogin(this.usuario);

    if (!this.isLogged) {

      this.sMsgRet = 'User / Password Invalido Rola';
    }

  }
}
