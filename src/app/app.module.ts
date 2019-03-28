import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RegisterPage } from '../pages/register/register';
import { ResetPage } from '../pages/reset/reset';
import { ForgotPage } from '../pages/forgot/forgot';
import { PolicyPage } from '../pages/policy/policy';
import { ClaimPage } from '../pages/claim/claim';
import { NotificationPage } from '../pages/notification/notification';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';

import { HardwareButtons } from '@scaffold-digital/ionic-hardware-buttons';
import { MotorPage } from '../pages/motor/motor';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ThirdPage } from '../pages/third/third';
import { CompPage } from '../pages/comp/comp';
import { ViewpolPage } from '../pages/viewpol/viewpol';
import { ViewcPage } from '../pages/viewc/viewc';
import { PolinfoPage } from '../pages/polinfo/polinfo';
import { MakeclaimPage } from '../pages/makeclaim/makeclaim';
import { PolProvider } from '../providers/pol/pol';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    ResetPage,
    ClaimPage,
    PolicyPage,
    NotificationPage,
    MotorPage,
    ThirdPage,
    CompPage,
    ViewpolPage,
    ViewcPage,
    PolinfoPage,
    MakeclaimPage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    ResetPage,
    ClaimPage,
    PolicyPage,
    NotificationPage,
    MotorPage,
    ThirdPage,
    CompPage,
    ViewcPage,
    ViewpolPage,
    PolinfoPage,
    MakeclaimPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HardwareButtons,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PolProvider
  ]
})
export class AppModule { }
