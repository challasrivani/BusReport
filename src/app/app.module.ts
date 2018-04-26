import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { Accordion } from './accordion.component';
import { AccordionGroup } from './accordion-group.component';
import { AppService } from './app.service';
;
import {DataTableComponent} from './dataTable.component'


@NgModule({
  declarations: [
    AppComponent,
    Accordion,
    AccordionGroup,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
