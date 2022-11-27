import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async open(component: any, dismiss?: Function, componentProps?: any): Promise<void> {
    const modal = await this.modalCtrl.create({ component, componentProps });
    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && dismiss) dismiss(data);
  }

}
