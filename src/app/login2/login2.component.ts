import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  Message = '';

  employees = [];
  constructor() { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
  }
//   onClickMe(){
//   this.Message = "Click Message Displayed";
// }
}