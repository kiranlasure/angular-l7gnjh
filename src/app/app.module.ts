import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { AppRoutingModule, routingComponent} from './app-routing.module';

const appRoutes: Routes = [
  {  },
  
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, AppRoutingModule],
  declarations: [ AppComponent, routingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
