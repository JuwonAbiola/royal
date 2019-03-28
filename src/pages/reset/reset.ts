import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';
import { Baseurl } from '../config/config';
/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  oldPassword: string = "";
  newPassword: string = "";
  confirmPassword: string = "";
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HttpClient, private toastCtrl: ToastController, public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  reset() {
    if (this.oldPassword === '' || this.newPassword === '' || this.confirmPassword === '') {

      let toast = this.toastCtrl.create({
        message: 'Please Fill all fields',
        duration: 3000,
        position: 'top'
        // cssClass: 'normalToast'
      });

      toast.present();
      return;
    }

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    // let headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json');

    let data = {
      newPassword: this.newPassword,
      oldPassword: this.oldPassword,
      confirmPassword: this.confirmPassword,
      email: localStorage.getItem("email")
    }
    console.log(data);

    this.http.post(Baseurl + "api/v3/user/changePassword", data)
      .subscribe((res: any) => {
        // alert(res);
        console.log(res);
        if (res.responseCode === "00") {
          loader.dismiss();
          localStorage.removeItem('ema')
          const alert = this.alertCtrl.create({
            title: 'Successful',
            message: res.message,
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.push(LoginPage);
                }
              }
            ]
          });
          alert.present();
        }
        else {
          loader.dismiss();
          const alert = this.alertCtrl.create({
            title: '',
            subTitle: res.message,
            buttons: ['OK']
          });
          alert.present();
        }


      }, error => {
        loader.dismiss();
        console.log(error);
        loader.dismiss();
        // alert(error.message);
        const alert = this.alertCtrl.create({
          title: '',
          subTitle: "Check your Internet Connection",
          buttons: ['OK']
        });
        alert.present();

      });


  }

}
