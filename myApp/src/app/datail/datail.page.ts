import { Tab3Page } from './../tab3/tab3.page';
import { Tab3PageModule } from './../tab3/tab3.module';
import { NavController, Platform, ToastController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Repo } from './../models/repo';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datail',
  templateUrl: './datail.page.html',
  styleUrls: ['./datail.page.scss'],
})
export class DatailPage implements OnInit {
  repo: Repo;

  constructor(public activatedRoute: ActivatedRoute, private navCtrl: NavController, public platform: Platform, public toastCtrl: ToastController, private modalCtrl: ModalController) {
    this.activatedRoute.params.subscribe(param => {
      this.repo = <Repo>param;
      this.backButtonEvent();
    });
 }

 backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.navCtrl.navigateBack('/tabs/tab3');      
      this.modalCtrl.create({
        component: Tab3Page
      }).then((modal) => {
        modal.present();
      });
    });
 }

 regresar(){
  this.navCtrl.navigateBack('/tabs/tab3');
 }

  ngOnInit() {
    this.backButtonEvent();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  ngOnDestroy() {
  }

}
