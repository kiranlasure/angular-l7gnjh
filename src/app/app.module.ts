import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [ AppComponent, LoginComponent, Login2Component,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
