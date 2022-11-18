import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { MarketRoutingModule } from './market-routing.module';
import { ViewMarketComponent } from './view-market/view-market.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ViewMarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    SharedModule,
    IonicModule,
    MatButtonModule
  ]
})
export class MarketModule { }
