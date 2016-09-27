import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MdInput} from '@angular2-material/input';
import {MdToolbar, MdToolbarRow} from '@angular2-material/toolbar';
import {MdCard, MdCardTitle, MdCardSubtitle, MdCardHeader, MdCardActions} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";

import {AppComponent} from './app.component';
import * as containers from './containers';
import * as ui from './ui';
import * as services from './services';
import {Store} from "./store";

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const ContainerComponents = [...mapValuesToArray(containers)];
const UiComponents = [...mapValuesToArray(ui)];
const providers = [...mapValuesToArray(services)];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponents,
    UiComponents,
    MdInput,
    MdToolbar,
    MdCard,
    MdCardTitle,
    MdCardSubtitle,
    MdCardHeader,
    MdCardActions,
    MdToolbarRow,
    MdButton
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    providers,
    Store
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
