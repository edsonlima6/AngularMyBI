import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() mostramenu = false;

  constructor() { }

  ngOnInit() {

  }


}
