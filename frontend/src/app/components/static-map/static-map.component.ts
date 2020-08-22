import { Component, OnInit } from '@angular/core';
import {MapOptions, tileLayer, Marker, Map, icon} from 'leaflet';


@Component({
  selector: 'app-static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.css']
})
export class StaticMapComponent implements OnInit {

  map:Map;
  mapOptions: MapOptions;
  centerLat: number;
  centerLong: number;
  propertyLat: number;
  propertyLong: number;
  propertyTitle: string;

  constructor() {     
    // Test data
    this.centerLat = 40.7484;
    this.centerLong = -73.9857;
    this.propertyLat = 40.7484;
    this.propertyLong = -73.9857;
    this.propertyTitle = "Empire State Building";
  }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  initializeMapOptions() {
    this.mapOptions = {
      // This is the main center point of our MAP
      center: [ this.centerLat,  this.centerLong],
      zoom: 13,
      layers: [
        tileLayer(
          `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          {
            attribution: 'Map data © OpenStreetMap contributors'
          }
          ),
      ],
    };
  }
  
  private addSampleMarker() {
    // Here we specify the LAT LONG of our PROPERTY to mark on MAP
    const marker = new Marker([this.propertyLat, this.propertyLong])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
        // Pop up shown when we click our MARKER
    marker.bindPopup(this.propertyTitle)
    marker.addTo(this.map);
  }
  
}