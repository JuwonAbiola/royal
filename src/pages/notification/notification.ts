import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(public navCtrl: NavController, private http: HttpClient, ) {
    this.films = this.http.get('https://192.168.1.108:8000');
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }
}
