import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Location } from './location';
import {Contact} from './contact';

@Injectable()
export class SeeyouService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private seeYouUrl = 'http://localhost:3000/api/';  // URL to web api

  constructor(private http: Http) { }

  getLocation(): Promise<Location> {
    return this.http.get(this.seeYouUrl + 'getLocation')
      .toPromise()
      .then(response => response.json().data as Location)
      .catch(this.handleError);
  }
  getPhoto(): Promise<any> {
    return this.http.get(this.seeYouUrl + 'getPhoto')
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  getContacs(): Promise<Array<Contact>> {
    return this.http.get(this.seeYouUrl + 'getContacs')
      .toPromise()
      .then(response => response.json().data.contacs as Contact)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

