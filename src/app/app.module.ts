import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent }            from './app.component';

import { AppRoutingModule, routingComponent} from '.app/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, AppRoutingModule],

  declarations: [ AppComponent,
   routingComponent],

  bootstrap:    [ AppComponent ],

  providers: [],
})
export class AppModule { }
