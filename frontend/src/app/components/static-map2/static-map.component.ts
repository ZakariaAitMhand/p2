import { Component, OnInit } from '@angular/core';
import {MapOptions, tileLayer, Marker, Map, icon} from 'leaflet';
import { AddrToLatLonService } from "../../services/addr-to-lat-lon/addr-to-lat-lon.service";

@Component({
  selector: 'app-static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.css']
})
export class StaticMapComponent implements OnInit {

  map:Map;
  mapOptions: MapOptions;
  propertyLat: number;
  propertyLong: number;
  propertyTitle: string;
  latlng: any;

  constructor(private latLongService:AddrToLatLonService) {     
    
    // Test data
    // this.propertyLat = 40.7484;
    // this.propertyLong = -73.9857;
    // this.latlng = {lat: 40.7484, lng:-73.9857};
    
    
  }

  async ngOnInit(): Promise<void> {
    this.latLongService.lat = 40.7484;
    this.latLongService.lng = -73.9857;
    this.propertyTitle = "Property Title";
    await this.setLatLng("84 columbia ave 07307");
    // await this.onMapReady(this.map);
    // await this.setLatLng("84 columbia ave 07307")
    await this.initializeMapOptions();
    // await this.addSampleMarker();
  }

  // console.log("
  // 1 onMapReady
  // 2 addSampleMarker
  // 3 setLatLng
  // 4 initializeMapOptions
  // 5 ////////////initializeMapOptions
  // 6 ////////////setLatLng
  // 7 ////////////addSampleMarker
  // 8 ////////////onMapReady
  // ");
  async onMapReady(map: Map) {
    
    console.log("onMapReady");
    this.map = map;
    // console.log(map)
    // await this.setLatLng("84 columbia ave 07307")
    // await this.initializeMapOptions();
    // await this.addSampleMarker();
    console.log("//////////onMapReady");
    
  }

  private async addSampleMarker() {
    
    console.log("addSampleMarker");
    // await this.initializeMapOptions();

    
    // console.log(this.latlng.lng);
    // console.log(this.latlng.lat);
    // Here we specify the LAT LONG of our PROPERTY to mark on MAP
    let marker = new Marker({lat: this.latLongService.lat,lng: this.latLongService.lng})
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
        // Pop up shown when we click our MARKER
    // marker = {lat: this.propertyLat,lng: this.propertyLong,};
    marker.bindPopup(this.propertyTitle)
    marker.addTo(this.map);
    console.log("////////addSampleMarker");
  }

  async setLatLng(addr:string):Promise<void>
  {
    console.log("setLatLng");
    await this.latLongService.getLatLong(addr);
    // this.latlng = this.latLongService.details["results"][0].locations[0].latLng;
    // this.propertyLat = this.latlng.lat;
    // this.propertyLong = this.latlng.lng;
    
    //  console.log(this.latlng);
    //  console.log(this.latlng.lat);
    
     console.log("/////////setLatLng");
  }

  private async initializeMapOptions() {
    
    console.log("initializeMapOptions");
    // console.log(this.latlng.lng);
    // console.log(this.latlng.lat);
    this.mapOptions = {
      // This is the main center point of our MAP
      center: [ this.latLongService.lat, this.latLongService.lng],
      zoom: 14,
      layers: [
        tileLayer(
          `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          {
            attribution: 'Map data © OpenStreetMap contributors'
          }
          ),
      ],
    };
    console.log(this.mapOptions);
    console.log("/////////initializeMapOptions");
  }
/*

  
  

*/
  
}
