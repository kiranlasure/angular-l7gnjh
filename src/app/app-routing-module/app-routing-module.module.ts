import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Login2Component } from '../login2/login2.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'login2', component: Login2Component}
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
export const routingComponent = [LoginComponent,Login2Component]