import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { HomePage } from '../home/home';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Generated class for the CompPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comp',
  templateUrl: 'comp.html',
})
@Injectable()
export class CompPage {
  rootNavCtrl: NavController;
  clientCode: string = '';
  registrationNumber: string = '';
  vehicleType: string = '';
  engineNumber: string = '';
  colour: string = '';
  vehicleModel: string = '';
  vehicleYear: string = '';
  sumInsured: string = '';
  chasis: string = '';
  riskType: string = '';
  films: any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
    console.log('I am here');
    this.films = this.http.get('http://192.168.1.108:8000/api/v3/riskTypes');
    console.log('Dapo is an idiot');
    this.films
      .subscribe((res: any) => {
        console.log('my data: ', res);
      })
  }

  pay() {

    this.rootNavCtrl.push(HomePage);

    if (this.sumInsured === '' || this.registrationNumber === '' || this.vehicleType === '' || this.engineNumber === '' || this.colour === '' || this.vehicleModel === '' || this.chasis === '' || this.riskType === '') {

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
      sumInsured: this.sumInsured,
      chasis: this.chasis,
      riskType: this.riskType
    }
    console.log(data);
    // this.http.post("http://localhost:8000/api/v3/policy/create", data, { headers: header })
    //   .subscribe((res: any) => {
    //     console.log(res);

    //     loader.dismiss();
    //     alert(res);
    //     if (res.responseCode === "00") {
    //       alert(res.responseMessage)
    //     }
    //     else {
    //       loader.dismiss();
    //       alert(res.responseMessage)
    //     }
    //   }, error => {
    //     loader.dismiss();
    //     console.log(error);
    //     loader.dismiss();
    //     // alert(error);
    //     const alert = this.alertCtrl.create({
    //       title: '',
    //       subTitle: "Check your Internet Connection",
    //       buttons: ['OK']
    //     });
    //     alert.present();

    //   });
  }

}
