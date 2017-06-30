import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Location } from '../shared/models/Location';
import { SearchParams } from '../shared/models/SearchParams';

import 'rxjs/Rx';

const  API_KEY : string = "76a65011c853346e34d283ae06d38703";
const RESOURCE_ID : string = "7eca2fa3-d6f5-444e-b3d6-faa441e35294";
//const RESOURCE_ID : string = "0a076478-3fd3-4e2c-b2d2-581876f56d77";
const  BASE_URL : string =
  "https://data.gov.in/api/datastore/resource.json";

@Injectable()
export class LocationSearchService {

  constructor(private http: Http){

  }

  public search(params : SearchParams) : Observable<Location> {
    let url = `${BASE_URL}?resource_id=${RESOURCE_ID}&api-key=${API_KEY}&filters[${params.field}]="${params.value}"`;

    return this.http.get(url)
                    .map(response => response.json())
                    .flatMap(body => body.records)
                    .map(this.mapToLocation);
  }

  private mapToLocation(record : any) : Location {
    return {
      name: record.OfficeName,
      region: record.Localitydetail1,
      district: record.DistrictName,
      pincode: record.Pincode,
      city: ''
    };
  }
}
