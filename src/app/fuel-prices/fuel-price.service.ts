import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'Rxjs/Observable'
import { FuelPriceUrlService } from './fuel-price-url.service';

import 'rxjs/Rx';

//const FUEL_PRICE_API_BASE_URL = 'http://fuelpriceindia.herokuapp.com'
const FUEL_PRICE_API_BASE_URL = 'http://localhost:4000'

@Injectable()
export class FuelPriceService {
  constructor(private http : Http, private fuelPriceUrl : FuelPriceUrlService) {

  }

  cities() : Observable<string[]> {
    const url = this.fuelPriceUrl.forCities();

    return this.http.get(url)
                    .map(response => response.json());
  }

  price(city : string) : Observable<number> {
    const url = this.fuelPriceUrl.forPrice(city);

    return this.http.get(url)
                    .map(response => response.json());

  }

}
