import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { LocationService } from '../location.service';
// import { LatLng, LatLngLiteral, PolyMouseEvent, PolygonOptions } from '@agm/core/services/google-maps-types';
// import { PolygonManager } from '@agm/core/services/managers/polygon-manager';
// import {AgmPolygon} from '@agm/core/directives/polygon';
 
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit { 
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  locationChosen =false;
  // paths: Array<LatLngLiteral> = [
  //   { lat: 51.678418,  lng: 7.809007 },
  //   { lat: 51.678418,  lng: 7.807000 },
  //   { lat: 51.678418, lng: 7.511144 },
  //   { lat: 51.678418, lng: 7.500000 },
  //   { lat: 51.678418,  lng: 7.666666 }
  // ]  
  // fillColor: "red";
  // visible: boolean;
  // strokeColor: "white";
  radius: number;
  location;
  drawingManager ; 
  public searchControl: FormControl;
  public zoom: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private locationService: LocationService,
  ) {}
  
  onChoseLocation(event) {
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationChosen=true;
    this.radius=10000;
    console.log(this.locationChosen);
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(event)
  } 

//   radiusChange() {
// console.log("changed radius=", this.radius)
//   }

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
        let buttonActive=document.getElementById("confirm");
        buttonActive["disabled"] = false;
        let place = autocomplete.getPlace();
        console.log(place)
        this.location = {        
          heading: place.address_components[2].long_name,
          address: place.name,
          area: place.geometry.location.lat()*place.geometry.location.lng(),          
          points: {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()          
        }
      }
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

  newAddress() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {        
        resolve();        
      }, 1000);
    });
    return promise;    
  }

  addToTable(): void {   
    if(this.locationService.location.indexOf(this.location) == -1) {
      this.locationService.location.push(this.location);
    }    
  }
}
