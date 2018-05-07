import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  empty = new Array(10).fill(null);

  editLocation(item) {
    
    console.log("lat=", item.points.latitude);
    console.log("lng=", item.points.longitude)
  }

  constructor(public locationService: LocationService) { }
  
  ngOnInit() {
    
  }

}
