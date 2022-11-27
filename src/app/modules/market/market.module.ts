import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MarketRoutingModule } from './market-routing.module';
import { ViewMarketComponent } from './view-market/view-market.component';
import { SharedModule } from '../../shared/shared.module';
import { ListFoodComponent } from './list-food/list-food.component';
import { FormFoodComponent } from './form-food/form-food.component';


@NgModule({
  declarations: [
    ViewMarketComponent,
    ListFoodComponent,
    FormFoodComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class MarketModule { }
