import {Component, Input, OnInit} from '@angular/core';
import { HttpClientService } from'../services/http-client.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input('colorPicker') colorPicker: any
  basicData: {
    labels: string[],
    datasets: {
      label: string,
      backgroundColor: string,
      data:  string[]
    }[]
  };
  basicOptions: any;
  loading = false;
  color = '#1976D2'

  public peoples : any[];
  public peopleName: string[] = [];
  public peopleHeight: string[] = []



  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getData().subscribe( (data: any) => {
      this.peoples = data.results;
      this.showPeoples()
      this.loading = true;
    })
  }

  showPeoples(){
    this.peoples.forEach((person: any) => {
      this.peopleName.push(person.name);
      this.peopleHeight.push(person.height)
    })

    this.basicData = {
      labels: this.peopleName,
      datasets: [
         {
           label: 'height',
           backgroundColor: this.color,
           data: this.peopleHeight
         }
      ]
    };
  }
  changeColor() {
     this.basicData = {
       labels: this.peopleName,
       datasets: [
         {
           label: 'height',
           backgroundColor: this.color,
           data: this.peopleHeight
         }
       ]
     };

  }

}
