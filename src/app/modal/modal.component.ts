import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Polygon } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
 
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  locationChosen =false;
  public searchControl: FormControl;
  public zoom: number;
  // points: object;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  onChoseLocation(event) {
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationChosen=true;
    console.log(this.locationChosen);
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(event)
  } 

  @ViewChild("search")
  public searchElementRef: ElementRef;  

  ngOnInit() {    
    this.zoom = 4;   
    
    this.searchControl = new FormControl();
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {       
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();           
          this.zoom = 12;          
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
 
  add= (event) => {
    
    console.log(event.target.value)
  }
  
}
