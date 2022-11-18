import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MARKET_ROUTING_CHILDREN } from '../../core/routes/market.routes';

const routes: Routes = [
  ...MARKET_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
