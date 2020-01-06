import { Component, OnInit } from '@angular/core';
import { AuthServiceLoginService } from '../login/auth-service-login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public authService: AuthServiceLoginService) { }

  ngOnInit() {
  }

  MouseClick(){
    console.log('Passou MouseClick');
    console.log(this.authService.LoggedIn());
  }
}
