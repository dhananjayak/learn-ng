import { Component, Input } from '@angular/core';
import { Location } from '../shared/models/Location';

@Component({
  selector: 'location-search-grid',
  templateUrl: './location-search-grid.html'
})
export class LocationSearchGridComponent {
  @Input() locations : Location[];


}
