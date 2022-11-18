import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROOT_ROUTING } from './core/routes/root.routes';
import { MARKET_ROUTING } from './core/routes/market.routes';

const routes: Routes = [
  ...ROOT_ROUTING,
  ...MARKET_ROUTING
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
