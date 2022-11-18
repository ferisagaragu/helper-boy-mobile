import { Component, Inject } from '@angular/core';
import { OneSignalPlugin } from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    @Inject('OneSignal') private oneSignal: OneSignalPlugin,
  ) {
    oneSignal.setAppId('7acbb92e-d05a-4efe-bddc-877d75e6c337');
    oneSignal.setNotificationOpenedHandler(function(jsonData: any) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    oneSignal.promptForPushNotificationsWithUserResponse(function(accepted: any) {
      console.log("User accepted notifications: " + accepted);
    });
  }

}
