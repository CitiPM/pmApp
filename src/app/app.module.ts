import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PastNetWorthComponent } from './past-net-worth/past-net-worth.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketMoversComponent,
    AccountsComponent,
    PastNetWorthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
