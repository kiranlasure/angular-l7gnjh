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

  // This Is deaclraion of the element name that we want to use in HTML/ View / component.HTML page
  // That does't not have any datatype. we can write it with any

  // We have to use Same/AS IT IS name in view page In INterpolation i.e Proprty Binding.

  // It's Also Called as Proprty In angular 
  constructor(private router:Router) { }

  ngOnInit() {
    this.name ='Enter Name:';
    this.password='Enter password:';

    // The above deaclred property we can define here with this keyword to tell this is property same class/constructor
  }
Signin()
{
  this.router.navigate(['/home']);
  console.log('well come you are login yet soon....');

}
GotoEmp()
{
  this.router.navigate(['/emp']);
}
ClickonClare(){

}
}