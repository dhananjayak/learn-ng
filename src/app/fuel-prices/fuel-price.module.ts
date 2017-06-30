import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FuelPriceListComponent } from './fuel-price-list.component';
import { FuelPriceDetailComponent } from './fuel-price-detail/fuel-price-detail.component';

const childRoutes : Routes = [
  {path:'detail/:city', component:FuelPriceDetailComponent}
]

const routes : Routes = [
  {path:'fuel', component:FuelPriceListComponent, children: childRoutes }
];

@NgModule({
  declarations : [
    FuelPriceListComponent,
    FuelPriceDetailComponent
  ],
  imports : [RouterModule.forChild(routes),
             CommonModule,
             ReactiveFormsModule]
})
export class FuelPriceModule {

}
