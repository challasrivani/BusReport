import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { busOrg, busData } from './busOrgs';

//import 'rxjs/add/operator/catch';
import { default as data_json } from '../assets/bus-services-data.json';

@Injectable()
export class AppService {
  
  constructor(private http: Http) {
  }

  getBusOrgs() {
    let apiUrl = 'assets/bus-services-data.json';
    
    return this.http.get(apiUrl)
      .map( (response: Response) => {
         const data: busOrg[] = response.json().data;
         return data;
      });
  }
}