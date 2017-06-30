import { Component, OnInit } from '@angular/core';
import { FuelPriceService } from './fuel-price.service';
import { Observable } from 'Rxjs/Observable';


@Component({
  selector : 'fuel-price-list',
  templateUrl : './fuel-price-list.html'
})
export class FuelPriceListComponent implements OnInit {
    cities : Observable<string[]>;

    constructor(private fps : FuelPriceService) {

    }

    ngOnInit() : void {
      this.cities = this.fps.cities()
    }

}
