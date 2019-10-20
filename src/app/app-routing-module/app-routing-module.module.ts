import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from '../app.component';
import { LoginComponent } from '../login/Login.component';
import { Login2Component } from '../login2/Login2.component';

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
    AppComponent,
    LoginComponent,
    Login2Component
  ]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,Login2Component]