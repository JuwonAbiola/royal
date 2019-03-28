import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Baseurl } from '../config/config';
import { BaseInput } from 'ionic-angular/umd/util/base-input';

/**
 * 
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HttpClient, private toastCtrl: ToastController, public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  act() {
    this.navCtrl.push(LoginPage);
  }

  reg() {
    if (this.firstName === '' || this.lastName == '' || this.email === '' || this.phoneNumber === '') {

      let toast = this.toastCtrl.create({
        message: 'Please Fill all fields',
        duration: 3000,
        position: 'top',
        cssClass: 'normalToast'

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
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber
    }
    console.log(data);
    localStorage.setItem('ema', this.email);
    console.log(this.email)
    this.http.post(Baseurl + "api/v3/user/create", data)
      .subscribe((res: any) => {
        console.log(this.email);
        // alert(res);
        if (res.responseCode === "00") {
          loader.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Registration Successful',
            message: 'Please login with the password sent to your email and phone number',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.push(LoginPage)
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
            subTitle: res.responseMessage,
            buttons: ['OK']
          });
          alert.present();
          console.log(res.message);
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

