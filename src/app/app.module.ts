import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import {ChartModule} from "primeng/chart";
import { HttpClientService } from './services/http-client.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ColorPickerModule } from "primeng/colorpicker";


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    ColorPickerModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
