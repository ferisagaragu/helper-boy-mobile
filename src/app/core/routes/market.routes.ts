import { Routes } from '@angular/router';
import { ViewMarketComponent } from '../../modules/market/view-market/view-market.component';


export const MARKET_ROUTING: Routes = [
  {
    path: 'market',
    loadChildren: () => import('../../modules/market/market.module').then(m => m.MarketModule)
  }
];

export const MARKET_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    component: ViewMarketComponent
  }
];
