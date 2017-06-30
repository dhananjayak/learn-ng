import { Component } from '@angular/core';
import { Location } from '../shared/models/Location';

@Component({
  selector:'location-search',
  templateUrl:'./location-search.html'
})
export class LocationSearchComponent
{
  locations : Location[];

  public onSearchResultsChange(locations : Location[]) {
    this.locations = locations.map(loc => loc);
    console.log('onSearchResultsChange = ', Array.isArray(this.locations));
  }
}
