import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { ViewcPage } from '../viewc/viewc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Baseurl } from '../config/config';

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
  policyNumber: string = '';
  claimant: string = '';
  narration: string = '';
  lossDate: string = '';
  lossHour: string = '';
  lossMinute: string = '';
  lossTime: string = '';
  film: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeclaimPage');
  }
  back() {
    this.navCtrl.push(ViewcPage);
  }

  claim() {
    if (this.narration === '' || this.lossTime === '' || this.lossDate === '') {

      let toast = this.toastCtrl.create({
        message: 'Please Fill all fields',
        duration: 3000,
        position: 'top'
        // cssClass: 'normalToast'

      });

      toast.present();
      return;
    }

    let str = this.lossTime;
    let res = str.split(":");
    this.lossHour = res[0];
    this.lossMinute = res[1];


    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    let header = {
      "Content-type": "application/json"
    };
    let data = {
      policyNumber: this.film.policyNumber,
      claimant: localStorage.getItem('email'),
      narration: this.narration,
      lossDate: this.lossDate,
      lossHour: this.lossHour,
      lossMinute: this.lossMinute
    }
    console.log(data);
    this.http.post(Baseurl + "api/v3/makeClaim", data, { headers: header })
      .subscribe((res: any) => {
        console.log(res);

        loader.dismiss();
        alert(res);
        if (res.responseCode === "00") {
          alert(res.responseMessage)
        }
        else {
          loader.dismiss();
          alert(res.responseMessage)
        }
      }, error => {
        loader.dismiss();
        console.log(error);
        loader.dismiss();
        // alert(error);
        const alert = this.alertCtrl.create({
          title: '',
          subTitle: "Check your Internet Connection",
          buttons: ['OK']
        });
        alert.present();

      });
  }

}
