import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRouteModule } from './portfolio.router.module';


@NgModule({
  declarations : [PortfolioComponent],
  imports : [ReactiveFormsModule, PortfolioRouteModule]
})
export class PortfolioModule {

}
