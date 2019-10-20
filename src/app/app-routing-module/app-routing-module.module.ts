import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Login2Component } from '../login2/login2.component';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: Login2Component},
  {path:'emp', component: EmployeeDataComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,Login2Component,EmployeeDataComponent]