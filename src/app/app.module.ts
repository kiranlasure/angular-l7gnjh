import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent} from './app.component';


import { AppRoutingModule,routingComponent} from './app-routing-module/app-routing-module.module';
import { EmployeeService } from './employee.service';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [
  BrowserModule, 
  FormsModule, 
  FlexLayoutModule,
  AppRoutingModule,
  HttpClientModule
   ],

  declarations: [
  AppComponent,routingComponent, EmployeeDataComponent],

  bootstrap:    [ AppComponent ],

  providers: [EmployeeService],
})
export class AppModule { }
