import { Component, OnInit } from '@angular/core';
import { HttpClientService } from'../services/http-client.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  basicData: {
    labels: string[],
    datasets: {
      label: string,
      color: string,
      data:  string[]
    }[]
  };
  basicOptions: any;
  loading = false;

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
           color: '#FFA726',
           data: this.peopleHeight
         }
      ]
    };
  }
}
