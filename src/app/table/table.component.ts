import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  location: Location[] = [];
  empty = new Array(10).fill(null);

  // addLocation(): void {
  //   location.push("")
  // }

  constructor() { }

  ngOnInit() {
  }

}
