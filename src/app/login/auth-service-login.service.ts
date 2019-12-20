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
  pathServer: string = environment.API; //'https://localhost:44302/api/';
  decodeToken: any;
  // updateValue = new EventEmitter<boolean>();
  // updateValueSubmited = new EventEmitter<boolean>();
  // isAuticate = false;
  // userAuthenticated: Usuario;
  // response: ResponseUser;
  // isSubmited: boolean = true;
  // responseUserError = new EventEmitter<ResponseUser>();

  constructor(private http: HttpClient) { }

  ValidaLogin(usu: Usuario) {

  }
  
  AuthenticateOnServe(Usuario) : Observable<ResponseUser> {

  return  this.http.post<ResponseUser>(this.pathServer + 'login/Authentication', Usuario, httpOptions)
             .pipe(
                delay(3000),
                take(1), 
                map((response: any) => {
                         
                    //console.log(response);   
                    this.decodeToken = this.helper.decodeToken(response.accessToken);
                    localStorage.setItem("token", response.accessToken);
                    //console.log(response); 
                    return response;
                })
              );
}

Loggout(){
  if(localStorage.getItem("token"))
     localStorage.removeItem("token");
}



  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     // console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     // console.error(
  //     //   `Backend returned code ${error.status}, ` +
  //     //   `body was: ${error.error}`);
  //     this.response = error.error;
  //     console.log(this.response);
  //   }
    
  //    return empty();
  //    //return throwError('Something bad happened; please try again later.');
    
  // };

}





