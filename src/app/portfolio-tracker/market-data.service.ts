import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';

const BASE_URL = "http://finance.google.com/finance/info?client=ig&q=NSE:"

@Injectable()
export class MarketDataService {
  constructor(private http : Http, private jsonp : Jsonp) {

  }

  fetchMarketPrice(symbol : string) : void {
    const url = `${BASE_URL}${symbol}`;

    this.http.get(url)
             .subscribe(res => console.log(res));
  }

}
