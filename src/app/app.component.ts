import { AuthServiceLoginService } from './login/auth-service-login.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Gotta';
  mostraMenu = false;
  constructor(private loginService: AuthServiceLoginService) { }

  ngOnInit() {
    this.loginService.updateValue.subscribe(
       mostra => this.mostraMenu = mostra
     );

  }




}
