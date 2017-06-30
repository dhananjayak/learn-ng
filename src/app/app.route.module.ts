import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { LogonFormComponent } from './logon-form/logon-form.component';

import { LocationSearchFormComponent } from './location-search/location-search-form.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { LocationSearchGridComponent } from './location-search/location-search-grid.component';

import { FuelPriceModule } from './fuel-prices/fuel-price.module';

import { PortfolioModule } from './portfolio-tracker/portfolio.module';


const routes : Routes = [
  {path:'', component:LogonFormComponent},
  {path:'search', component:LocationSearchComponent}
];

@NgModule({
  declarations : [
    LogonFormComponent,
    LocationSearchComponent,
    LocationSearchFormComponent,
    LocationSearchGridComponent
  ],
  imports : [RouterModule.forRoot(routes),
             CommonModule,
             ReactiveFormsModule,
             FuelPriceModule,
             PortfolioModule],
  exports : [RouterModule]
})
export class AppRouteModule {

}
