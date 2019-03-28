import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PolProvider {
  films: any;

  constructor(public http: HttpClient) {
    this.films = this.http.get('https://swapi.co/api/films');
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

}
