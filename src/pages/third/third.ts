import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SuperTabsController } from 'ionic2-super-tabs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
@Injectable()
export class ThirdPage {
  rootNavCtrl: NavController;
  clientCode: string = '';
  registrationNumber: string = '';
  vehicleType: string = '';
  engineNumber: string = '';
  colour: string = '';
  vehicleModel: string = '';
  vehicleYear: string = '';
  chasis: string = '';
  riskType: string = '';
  films: any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
    let header = {
      "Content-type": "application/json"
    };
    this.films = this.http.get('https://swapi.co/api/films', { headers: header });
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  pay() {

    // this.rootNavCtrl.push(HomePage);

    if (this.registrationNumber === '' || this.vehicleType === '' || this.engineNumber === '' || this.colour === '' || this.vehicleModel === '' || this.chasis === '' || this.riskType === '') {

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

    let header = {
      "Content-type": "application/json"
    };
    let data = {
      clientCode: this.clientCode,
      registrationNumber: this.registrationNumber,
      vehicleType: this.vehicleType,
      engineNumber: this.engineNumber,
      colour: this.colour,
      vehicleModel: this.vehicleModel,
      vehicleYear: this.vehicleYear,
      chasis: this.chasis,
      riskType: this.riskType
    }
    console.log(data);
    //   this.http.post("http://localhost:8000/api/v3/policy/create", data, { headers: header })
    //     .subscribe((res: any) => {
    //       console.log(res);

    //       loader.dismiss();
    //       alert(res);
    //       if (res.responseCode === "00") {
    //         alert(res.responseMessage)
    //       }
    //       else {
    //         loader.dismiss();
    //         alert(res.responseMessage)
    //       }
    //     }, error => {
    //       loader.dismiss();
    //       console.log(error);
    //       loader.dismiss();
    //       // alert(error);
    //       const alert = this.alertCtrl.create({
    //         title: '',
    //         subTitle: "Check your Internet Connection",
    //         buttons: ['OK']
    //       });
    //       alert.present();

    //     });
  }

}
