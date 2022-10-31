import {Component, OnInit} from '@angular/core';
import { HttpClientService } from'../services/http-client.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  providers: [MessageService]
})
export class BarchartComponent implements OnInit {

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
  color = '#1976d2'

  public peoples : any[];
  public peopleName: string[] = [];
  public peopleHeight: string[] = []



  constructor(
    private httpClientService: HttpClientService,
    private messageService: MessageService
  ) {}

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
  changeColor(colorPicker: any) {
    if(colorPicker.overlay !== null){
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
      this.addSingle()
    }
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
