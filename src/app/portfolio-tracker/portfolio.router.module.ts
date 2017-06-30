import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes : Routes = [
  {path:'portfolio', component:PortfolioComponent}
];

export const PortfolioRouteModule = RouterModule.forChild(routes);
