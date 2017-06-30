import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocationSearchService } from './location-search.service';
import { SearchParams } from '../shared/models/SearchParams';
import { Location } from '../shared/models/Location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector:'location-search-form',
  templateUrl: './location-search-form.html'
})
export class LocationSearchFormComponent  {
  @Output() searchResultsChange : EventEmitter<Location[]>;

  searchForm : FormGroup;
  constructor(private locationSearchService : LocationSearchService,
              private fb : FormBuilder) {

            this.searchForm = this.fb.group({
              'searchField': [''],
              'searchValue' : ['']
            });

            this.searchResultsChange = new EventEmitter<Location[]>();

  }



  public onSubmit() {
      const searchField = this.searchForm.get('searchField').value;
      const searchValue = this.searchForm.get('searchValue').value;
      const params = new SearchParams(searchField, searchValue);

      const locations =
        this.locationSearchService.search(params)
                                .toArray()
                                .subscribe(result => this.searchResultsChange.emit(result));

  }

  public onSearchFieldChange(){
    this.searchForm.get('searchValue').setValue('');
  }
}
