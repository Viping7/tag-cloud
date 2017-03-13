import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainDirective } from './main.directive';
import {positionXArray,positionYArray} from './global';
@NgModule({
  declarations: [
    AppComponent,
    MainDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    positionXArray],
  bootstrap: [AppComponent]
})
export class AppModule { }
