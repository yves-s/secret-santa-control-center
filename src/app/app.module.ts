import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MdInput} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdCard} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";

import {AppComponent} from './app.component';
import * as containers from './containers';
import * as ui from './ui';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const ContainerComponents = [...mapValuesToArray(containers)];
const UiComponents = [...mapValuesToArray(ui)];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponents,
    UiComponents,
    MdInput,
    MdToolbar,
    MdCard,
    MdButton
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
