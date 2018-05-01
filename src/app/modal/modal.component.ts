import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  locationChosen =false;

  onChoseLocation(event) {
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationChosen=true;
    console.log(this.locationChosen);
    console.log(this.latitude);
    console.log(this.longitude);
  }
  
  constructor() { }

  ngOnInit() {
  }
  

}
