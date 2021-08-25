import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { PastNetWorthComponent } from './past-net-worth/past-net-worth.component';

const routes: Routes = [
  {path:'', redirectTo: '/market-movers', pathMatch:'full'},
  {path:'market-movers', component:MarketMoversComponent},
  {path:'past-net-worth', component:PastNetWorthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
