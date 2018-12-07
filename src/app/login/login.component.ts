import { Usuario } from './../class/usuario';
import { Component, OnInit } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submited: boolean;
  dismissOnTimeout: number = 3500;
  dismissible: boolean;

  constructor(private authService: AuthServiceLoginService) {}
  ngOnInit() {
    this.dismissible = true;
  }


  oClick(form) {

    console.log(this.usuario.email);
    // this.authService.ValidaLogin(this.usuario);
  }
}
