import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  Message = '';
  constructor() { }

  ngOnInit() {
  }
  onClickMe(){
  this.Message = "Click Message Displayed";
}
}