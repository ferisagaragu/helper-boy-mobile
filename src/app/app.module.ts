import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import OneSignal from 'onesignal-cordova-plugin';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'OneSignal', useValue: OneSignal},
    { provide: Camera, useClass: Camera },
    { provide: Vibration, useClass: Vibration }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
