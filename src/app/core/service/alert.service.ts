import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async confirm(
    title: string,
    message: string,
    ok: Function,
    cancel?: Function
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => { if (cancel) cancel()},
        },
        {
          text: 'Ok',
          handler: () => ok(),
        },
      ],
    });

    await alert.present();
  }

}
