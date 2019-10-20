import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent} from './app.component';


import { AppRoutingModule,routingComponent} from './app-routing-module/app-routing-module.module';
import { EmployeeService } from './employee.service';


@NgModule({
  imports:      [
  BrowserModule, 
  FormsModule, 
  FlexLayoutModule,
  AppRoutingModule
   ],

  declarations: [
  AppComponent,routingComponent],

  bootstrap:    [ AppComponent ],

  providers: [EmployeeService],
})
export class AppModule { }
