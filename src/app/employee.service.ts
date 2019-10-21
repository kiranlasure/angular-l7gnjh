import { Injectable } from '@angular/core';

@Injectable()

//  Use this Service name in your component where you want use this logic
export class EmployeeService {

  // Service is Module in which we can write your business logic that you to use in another component
  // Ex. suppose we want a data of some employees in your component 
  //      == In one component you want only Id & name then we can call this Service in that componet n display on 
  //      Id and Name.

  // we can inject your service in that component. Serivices is reusable 
  
  getEmployees() {
    
    return [
      {"id": 1, "Name" : "Rushikesh", "Gender":"Male"},
      {"id": 2, "Name" : "Radhika", "Gender":"Female"},
      {"id": 3, "Name" : "Nikhil", "Gender":"Male"},
      {"id": 4, "Name" : "Nitin", "Gender":"Female"},
      {"id": 5, "Name" : "Rakhi", "Gender":"Female"},
      {"id": 6, "Name" : "Ritesh", "Gender":"Female"},
      {"id": 7, "Name" : "Dipika", "Gender":"Female"}
    ]
  }
  constructor() { }

}