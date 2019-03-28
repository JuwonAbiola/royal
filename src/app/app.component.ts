import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, NavController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { PolicyPage } from '../pages/policy/policy';
import { MotorPage } from '../pages/motor/motor';
import { ViewcPage } from '../pages/viewc/viewc';
import { ViewpolPage } from '../pages/viewpol/viewpol';
import { timer } from 'rxjs/observable/timer';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = PolicyPage;
  pages: Array<{ svg: string, name: string, component: any }>;

  showSplash = true;

  constructor(public splashScreen: SplashScreen, public statusBar: StatusBar, public platform: Platform, public app: App, public alertCtrl: AlertController

  ) {
    this.initializeApp();

    this.pages = [
      { svg: "assets/img/home.svg", name: 'Home', component: HomePage },
      { svg: "assets/img/pol.svg", name: 'View Policies', component: ViewpolPage },
      { svg: "assets/img/cl.svg", name: 'View Claims', component: ViewcPage },
      { svg: "assets/img/lo.svg", name: 'Log Out', component: LoginPage },
    ];
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so te platorm is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

