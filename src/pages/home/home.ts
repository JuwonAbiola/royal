import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

import { MenuController } from 'ionic-angular';

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

}
