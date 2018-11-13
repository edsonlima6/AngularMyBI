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

  constructor(private authService: AuthServiceLoginService) {}

  ngOnInit() {
  }

  oClick() {
    console.log(this.usuario.name);
    this.authService.ValidaLogin(this.usuario);
    console.log(this.authService.isAuticate);
  }
}
