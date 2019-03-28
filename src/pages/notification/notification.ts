import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakeclaimPage } from '../makeclaim/makeclaim';
import { PolProvider } from '../../providers/pol/pol';

//  * Generated class for the NotificationPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  *
// @IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  films: any;
  fil: string = '';

  constructor(public navCtrl: NavController, private http: HttpClient, public alertCtrl: AlertController, public user: PolProvider) {

  }

  ionViewDidLoad() {

    this.films = this.http.get('https://swapi.co/api/films');
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })

  }

  openDetails(film) {
    this.navCtrl.push(MakeclaimPage, { film: film });
    const alert = this.alertCtrl.create({
      title: 'Registration Successful',
      message: 'Please login with the password sent to your email and phone number',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // this.navCtrl.push(LoginPage)
          }
        }
      ]
    });
    alert.present();
  }
}
