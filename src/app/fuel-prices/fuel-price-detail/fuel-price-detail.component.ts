import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuelPriceService } from '../fuel-price.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector : 'fuel-price-detail',
  templateUrl : './fuel-price-detail.html'
})
export class FuelPriceDetailComponent {
    price : Observable<any>;

    constructor(private route : ActivatedRoute, private fps : FuelPriceService ) {
      var citySeq = route.params.map(params => params['city']);
      var priceSeq = citySeq.flatMap(city => fps.price(city));

      this.price =
        Observable.combineLatest(citySeq,
                                 priceSeq,
                (city, price) => {return {city:city, price:price}});
    }
}
