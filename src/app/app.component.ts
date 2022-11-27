import { Component, Inject } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { OneSignalPlugin } from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    @Inject('OneSignal') private oneSignal: OneSignalPlugin,
    private device: Device,
  ) {
    if (window.hasOwnProperty('Capacitor')) {
      oneSignal.setAppId('7acbb92e-d05a-4efe-bddc-877d75e6c337');
      console.log(device.uuid)
    }
  }

}
