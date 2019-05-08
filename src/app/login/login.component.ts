import { Usuario } from './../class/usuario';
import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck{

 
 
  usuario: Usuario = new Usuario();
  submited: boolean;
  dismissOnTimeout: number = 3500;
  dismissible: boolean;
  isLogIn:boolean = true;
  isProcessing:boolean = false;

  constructor(private authService: AuthServiceLoginService) {
    
  }
  ngDoCheck(): void {
  }


  ngOnInit() { 
    this.dismissible = true;
    this.authService.updateValue.subscribe(r => this.isLogIn = r);
    this.authService.updateValueSubmited.subscribe(updateValueSubmited => this.isProcessing = updateValueSubmited);
  }


  oClick() {

    this.isProcessing = true;
    this.authService.ValidaLogin(this.usuario);
  }
}
