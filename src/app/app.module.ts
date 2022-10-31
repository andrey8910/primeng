import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import {ChartModule} from "primeng/chart";
import { HttpClientService } from './services/http-client.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,

  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
