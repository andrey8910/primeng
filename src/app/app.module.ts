import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import {ChartModule} from "primeng/chart";
import { HttpClientService } from './services/http-client.service';



@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
