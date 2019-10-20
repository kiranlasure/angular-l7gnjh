import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

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