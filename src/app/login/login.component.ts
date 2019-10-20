import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public name:any;
public password:any;
  constructor() { }

  ngOnInit() {
    this.name ='Enter Name:';
    this.password='Enter password';
  }
Signin()
{
  console.log('well come you are login yet soon....');
}
ClickonClare(){

}
}