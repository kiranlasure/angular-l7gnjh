import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Login2Component } from '../login2/login2.component';

// Remember the Path some eror are occure due Mismatch in path.
import { EmployeeDataComponent } from '../employee-data/employee-data.component';

const routes: Routes = [
  {path:'', component: LoginComponent}, // Not specify the path for first because it is Home Page.
  {path:'home', component: Login2Component},
  {path:'emp', component: EmployeeDataComponent}
];

// Routes : is is the array of the path 
// It Takes path name that we can specify at the time of navigation
// 2nd Parameter is component Name. i.e which component we want to render.

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Import the above array Here
  ],

  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,Login2Component,EmployeeDataComponent]

// We can can create Array of Component and we have to import that path in your module. ts file.