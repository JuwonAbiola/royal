import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MakeclaimPage } from '../makeclaim/makeclaim';
/**
 * Generated class for the ViewcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewc',
  templateUrl: 'viewc.html',
})
export class ViewcPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  openDetails(film) {
    this.navCtrl.push(MakeclaimPage, { film: film });
  }
}