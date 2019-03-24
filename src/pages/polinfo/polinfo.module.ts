import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolinfoPage } from './polinfo';

@NgModule({
  declarations: [
    PolinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PolinfoPage),
  ],
})
export class PolinfoPageModule {}
