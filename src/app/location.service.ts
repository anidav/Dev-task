import { Injectable } from '@angular/core';
import { Location } from './location';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LocationService {

  constructor() { }
    getLocation(): Location[] {
     
      console.log("Location is ")
      return ;
    }
}
