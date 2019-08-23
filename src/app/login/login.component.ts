import { Usuario } from './../class/usuario';
import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';
import { ResponseUser } from '../class/ResponseUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck{

 
  erro: ResponseUser;
  usuario: Usuario = new Usuario();
  responseLogin: any;
  submited: boolean;
  dismissOnTimeout: number = 3500;
  dismissible: boolean;
  //isLogIn:boolean = true;
  isProcessing:boolean = false;

  constructor(private authService: AuthServiceLoginService) {}
  ngDoCheck(): void {
  }


  ngOnInit() { 
    this.dismissible = true;
    //this.authService.updateValue.subscribe(r => this.isLogIn = r);
  }


  oClick() {

    this.isProcessing = true;
    this.authService.AuthenticateOnServe(this.usuario).subscribe(
      data => this.responseLogin = data, 
      (err) => { this.erro = err; this.isProcessing = false}
    );
    this.authService.responseUserError.subscribe(t => this.erro = t);
  }
}
