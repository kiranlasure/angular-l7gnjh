import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public name:any;
public password:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.name ='Enter Name:';
    this.password='Enter password:';
  }
Signin()
{
  this.router.navigate(['/home']);
  console.log('well come you are login yet soon....');

}
ClickonClare(){

}
}