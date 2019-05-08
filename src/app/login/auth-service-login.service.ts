import { Usuario } from './../class/usuario';
import { Injectable,  EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ResponseUser } from '../class/ResponseUser';
import { Observable, throwError, of, empty } from 'rxjs';
import { catchError, retry, take, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  
  pathServer: string = environment.API; //'https://localhost:44302/api/';
  updateValue = new EventEmitter<boolean>();
  updateValueSubmited = new EventEmitter<boolean>();
  isAuticate = false;
  userAuthenticated: Usuario;
  response: ResponseUser;
  isSubmited: boolean = true;

  constructor(private http: HttpClient) { }

  ValidaLogin(usu: Usuario) {

   if (usu.Email === 'edsonlima6@gmail.com') 
   {
      console.log('Chamou o metodo');
      this.AuthenticateOnServe(usu);
      this.updateValue.emit(this.isAuticate);
   } 
   else 
   {
     this.isAuticate = false;
     this.updateValue.emit(this.isAuticate);

     this.isSubmited = false;
      this.updateValueSubmited.emit(this.isSubmited);
     console.log('nao logado');
   }

  }



  AuthenticateOnServe(Usuario){

    this.http.put<ResponseUser>(this.pathServer + 'login/SignUp', Usuario, httpOptions)
             .pipe(
                delay(3000),
                take(1),
                catchError(this.handleError)
              )
             .subscribe(ret => {

              this.response = ret;
              this.isAuticate = ret.created;

              this.isSubmited = false;
              this.updateValueSubmited.emit(this.isSubmited);
              console.log(this.response);
             });
             

  }

  private handleError(error: HttpErrorResponse) {
    //if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //     `body was: ${error.error}`);
    // }
    //console.log(error.error.message);
    //this.response.message = error.error.message;
    //console.log(error.error.message);
    // // return an observable with a user-facing error message
     return empty();

    
  };

}





