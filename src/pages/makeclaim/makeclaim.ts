import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewcPage } from '../viewc/viewc';

/**
 * Generated class for the MakeclaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makeclaim',
  templateUrl: 'makeclaim.html',
})
export class MakeclaimPage {

  film: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeclaimPage');
  }
  back() {
    this.navCtrl.push(ViewcPage);
  }
}
