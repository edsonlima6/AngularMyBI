import { Usuario } from './../class/usuario';
import { Injectable,  EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceLoginService {

  updateValue = new EventEmitter<boolean>();
  isAuticate = false;

  constructor() { }

  ValidaLogin(usu: Usuario) {

   if (usu.name === '123') {
      this.isAuticate = true;
      this.updateValue.emit(this.isAuticate);
   } else {
     this.isAuticate = false;
     this.updateValue.emit(this.isAuticate);
   }

  }

}





