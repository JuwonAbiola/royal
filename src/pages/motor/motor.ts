import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PolicyPage } from '../policy/policy';
import { SuperTabsModule, SuperTabsController } from 'ionic2-super-tabs';
import { CompPage } from '../comp/comp';
import { ThirdPage } from '../third/third';


/**
 * Generated class for the MotorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motor',
  templateUrl: 'motor.html',
})
export class MotorPage {

  page1: any = CompPage;
  page2: any = ThirdPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotorPage');
  }
  back() {
    this.navCtrl.push(PolicyPage);
  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
