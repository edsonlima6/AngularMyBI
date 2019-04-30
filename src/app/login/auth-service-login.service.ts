import { Usuario } from './../class/usuario';
import { Injectable,  EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  
  pathServer: string = 'https://localhost:44302/api/';
  updateValue = new EventEmitter<boolean>();
  isAuticate = false;
  userAuthenticated: Usuario;

  constructor(private http: HttpClient) { }

  ValidaLogin(usu: Usuario) {

   if (usu.Email === 'edsonlima6@gmail.com') {
      this.isAuticate = true;
      this.updateValue.emit(this.isAuticate);

      console.log('Chamou o metodo');
      this.AuthenticateOnServe(usu);
      
   } 
   else {
     this.isAuticate = false;
     this.updateValue.emit(this.isAuticate);
     console.log('nao logado');



   }

  }



  AuthenticateOnServe(Usuario){

    console.log(Usuario);
    this.http.put(this.pathServer + "login/SignUp", Usuario, httpOptions)
             .subscribe(ret => {
              console.log(ret);
             });

  }

}





