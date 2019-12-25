import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  grooms = [];
  
  constructor(private groomservice: EmployeeService) { }

  ngOnInit(){


      this.groomservice.getgroomsDetails().subscribe(data =>{
          this.grooms = data;

          console.log(data);

      },error=>{
        console.log(error)
      } );
  }
}