import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarketDataService } from './market-data.service';

@Component({
  templateUrl: './portfolio.html',
  providers : [ MarketDataService ]
})
export class PortfolioComponent implements OnInit {
  stockListForm : FormGroup;

  constructor(private fb : FormBuilder, private mds : MarketDataService) {
    this.stockListForm = this.fb.group({
      'symbol' : [''],
      'quantity' : [0]
    });
  }

  ngOnInit() {
    this.mds.fetchMarketPrice('BIOCON');
  }

}
