import { Usuario } from './../class/usuario';
import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { AuthServiceLoginService } from './auth-service-login.service';
import { ResponseUser } from '../class/ResponseUser';
import { AlertifyService } from '../class/Services/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  erro: ResponseUser;
  usuario: Usuario = new Usuario();
  responseLogin: any;
  //submited: boolean;
  dismissOnTimeout: any = 3500;
  dismissible: boolean;
  isProcessing:any = false;

  constructor(public authService: AuthServiceLoginService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.dismissible = true;
  }


  oClick() {
    this.isProcessing = true;
    this.erro = null;
    this.authService.AuthenticateOnServe(this.usuario).subscribe(
      (data) => { // this.responseLogin = data;
                  this.isProcessing = false;},
      (err) => this.handleError(err)
    );
  }

handleError(err: HttpErrorResponse)
{
  this.isProcessing = false; 
  if (err.error instanceof ProgressEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    this.alertify.error("ERROR TO CONNECT SERVER");
  } else if (err.error instanceof ErrorEvent){
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    this.alertify.error("Backend returned something bad");
  } else {
  this.erro = err.error; 
    console.log(err); 
  }
}

}
