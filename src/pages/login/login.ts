import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { ForgotPage } from '../forgot/forgot';
import { ResetPage } from '../reset/reset';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HttpClient, private toastCtrl: ToastController, public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    this.menuCtrl.enable(false, 'myMenu');
  }
  login() {
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  alertService = (response) => {

    return this.alertCtrl.create({
      title: 'Status',
      subTitle: response,
      buttons: ['Dismiss']
    });

  }
  clearData = () => {
    this.email = '';
    this.password = '';
  }

  act() {
    this.navCtrl.push(RegisterPage);
  }
  for() {
    this.navCtrl.push(ForgotPage);
  }

  // login() {



  // if (this.email === '' || this.password === '') {

  //   let toast = this.toastCtrl.create({
  //     message: 'Please Fill all fields',
  //     duration: 3000,
  //     position: 'top'
  //     // cssClass: 'normalToast'

  //   });

  //   toast.present();
  //   return;
  // }
  // const loader = this.loadingCtrl.create({
  //   content: "Please wait..."
  // });
  // loader.present();

  // let header = {
  //   "Content-type": "application/json"
  // };
  // let data = {
  //   email: this.email,
  //   password: this.password
  // }
  // console.log(data);

  // localStorage.setItem('email', this.email);
  // // localStorage.setItem('password', this.password);

  // this.http.post("http://192.168.1.111:8000/api/v3/user/login", data, { headers: header })
  //   .subscribe((res: any) => {
  //     console.log(res);

  //     // loader.dismiss();
  //     alert(res);
  //     if (res.responseCode === "00") {

  //     }
  //     else {
  //       // loader.dismiss();
  //       const alert = this.alertCtrl.create({
  //         title: '',
  //         message: res.message,
  //         buttons: [
  //           {
  //             text: 'OK',
  //             handler: () => {
  //               if (localStorage.getItem("password") == 'undefined' || 'null') {
  //                 this.navCtrl.push(HomePage);
  //               }
  //               else {
  //                 this.navCtrl.push(HomePage);
  //               }
  //             }
  //           }
  //         ]
  //       });
  //       alert.present();
  //     }


  //   }, error => {
  //     // loader.dismiss();
  //     console.log(error);
  //     // loader.dismiss();
  //     // alert(error);
  //     const alert = this.alertCtrl.create({
  //       title: '',
  //       subTitle: "Check your Internet Connection",
  //       buttons: ['OK']
  //     });
  //     alert.present();

  //   });
  // }
}


