import { Usuario } from './../class/usuario';
import { Injectable,  EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ResponseUser } from '../class/ResponseUser';
import { Observable, throwError, of, empty } from 'rxjs';
import { take, delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json', 
    'Access-Control-Allow-Origin': '*'
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    //,'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class AuthServiceLoginService {
  
  helper = new JwtHelperService();
  pathServer: string = environment.API; 
  decodeToken: any;

  constructor(private http: HttpClient) { }

  ValidaLogin(usu: Usuario) {

  }
  SignUp(user: Usuario){


  }
  
  AuthenticateOnServe(Usuario) : Observable<ResponseUser> {
  return  this.http.post<ResponseUser>(this.pathServer + 'login/Authentication', Usuario, httpOptions)
                   .pipe(
                       delay(3000),
                       take(1), 
                       map((response: any) => {
                           this.decodeToken = this.helper.decodeToken(response.accessToken);
                           localStorage.setItem("token", response.accessToken);
                           return response;
                       })
                     );
}

Loggout(){
  if(localStorage.getItem('token')) {
    this.decodeToken = null;
    localStorage.removeItem('token');    
  }
  
    
}

LoggedIn()
{
  return (localStorage.getItem('token') != null);
}

}





