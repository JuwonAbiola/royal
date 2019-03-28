import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PolinfoPage } from '../polinfo/polinfo';
import { HomePage } from '../home/home';
import { Injectable } from '@angular/core';
import { Baseurl } from '../config/config';



/**
 * Generated class for the ViewpolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewpol',
  templateUrl: 'viewpol.html',
})
export class ViewpolPage {
  films: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {

  }

  ionViewDidLoad() {
    this.films = this.httpClient.get(Baseurl + 'api/v3/policy/view/' + localStorage.getItem('email'));
    this.films
      .subscribe((res: any) => {
        console.log('my data: ', res);
      })
  }

  openDetails(film) {
    this.navCtrl.push(PolinfoPage, { film: film });
  }

  back() {
    this.navCtrl.push(HomePage);
  }




}