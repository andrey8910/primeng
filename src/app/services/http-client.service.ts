import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public httpClient : HttpClient) { }

  getData(){
    return this.httpClient.get('https://swapi.dev/api/people')
  }
}
