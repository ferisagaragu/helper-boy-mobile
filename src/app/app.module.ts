import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import OneSignal from 'onesignal-cordova-plugin';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'OneSignal', useValue: OneSignal},
    { provide: Camera, useClass: Camera },
    { provide: Vibration, useClass: Vibration },
    { provide: Device, useClass: Device }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
