import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { LogonService } from './logon-form/logon-service';
import { LocationSearchService } from './location-search/location-search.service';
import { FuelPriceUrlService } from './fuel-prices/fuel-price-url.service';
import { FuelPriceService } from './fuel-prices/fuel-price.service';

import { AppComponent } from './app.component';

import { AppRouteModule } from './app.route.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouteModule,
    JsonpModule
  ],
  providers: [LogonService, LocationSearchService, FuelPriceUrlService, FuelPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
