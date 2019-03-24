import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompPage } from './comp';

@NgModule({
  declarations: [
    CompPage,
  ],
  imports: [
    IonicPageModule.forChild(CompPage),
  ],
})
export class CompPageModule {}
