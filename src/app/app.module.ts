import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PastNetWorthComponent } from './past-net-worth/past-net-worth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { GainersComponent } from './gainers/gainers.component';
import { LosersComponent } from './losers/losers.component';


@NgModule({
  declarations: [
    AppComponent,
    MarketMoversComponent,
    AccountsComponent,
    PastNetWorthComponent,

    GainersComponent,
    LosersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
