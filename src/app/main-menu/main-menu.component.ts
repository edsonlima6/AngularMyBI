import { Component, OnInit, Input } from '@angular/core';
import {AuthServiceLoginService} from './../login/auth-service-login.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isCollapsed:boolean = false;
  @Input() mostramenu = false;

  constructor(private auth: AuthServiceLoginService ) { }

  ngOnInit() {

  }

  Loggout(){
    console.log('Passou');
    this.auth.Loggout();
  }


}
