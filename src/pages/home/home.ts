import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

import { MenuController } from 'ionic-angular';
import { PolicyPage } from '../policy/policy';
import { ClaimPage } from '../claim/claim';
import { ViewcPage } from '../viewc/viewc';

declare var PaypadFacade: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public menuCtrl: MenuController, public modalCtrl: ModalController, private toastCtrl: ToastController, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidLoad() {


  }

  policy() {
    this.navCtrl.push(PolicyPage);
  }

  claim() {
    this.navCtrl.push(ViewcPage);
  }

}
