import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule } from '@ionic/angular';

import { DatailPage } from './datail.page';

const routes: Routes = [
  {
    path: '',
    component: DatailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatailPage]
})
export class DatailPageModule {}
