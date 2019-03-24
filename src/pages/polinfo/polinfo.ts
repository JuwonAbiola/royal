import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewpolPage } from '../viewpol/viewpol';

/**
 * Generated class for the PolinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polinfo',
  templateUrl: 'polinfo.html',
})
export class PolinfoPage {
  film: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolinfoPage');
  }
  back() {
    this.navCtrl.push(ViewpolPage);
  }
}
