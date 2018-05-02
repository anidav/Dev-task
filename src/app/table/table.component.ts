import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  location: Array<Location>;
  item: Location;
  empty = new Array(10).fill(null);
  
  constructor(private locationService: LocationService) { }
  
  ngOnInit() {
    
  }

}
