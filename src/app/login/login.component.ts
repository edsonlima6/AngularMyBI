import { Usuario } from './../class/usuario';
import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';
import { ResponseUser } from '../class/ResponseUser';
import { AlertifyService } from '../class/Services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  erro: ResponseUser;
  usuario: Usuario = new Usuario();
  responseLogin: any;
  submited: boolean;
  dismissOnTimeout: any = 3500;
  dismissible: boolean;
  isProcessing:any = false;

  constructor(private authService: AuthServiceLoginService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.dismissible = true;
  }


  oClick() {
    this.isProcessing = true;
    this.authService.AuthenticateOnServe(this.usuario).subscribe(
      data => this.responseLogin = data,
      (err) => { this.erro = err; this.alertify.error('teste');  }
    );
  }
}
