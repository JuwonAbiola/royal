import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MakeclaimPage } from '../makeclaim/makeclaim';
import { HomePage } from '../home/home';
import { Baseurl } from '../config/config';
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
    this.films = this.httpClient.get(Baseurl + 'api/v3/policy/view/' + localStorage.getItem('email'));
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  openDetails(film) {
    this.navCtrl.push(MakeclaimPage, { film: film });
  }

  back() {
    this.navCtrl.push(HomePage);
  }

}