import { Injectable } from '@angular/core';

// Import for HTTP Client
import {HttpClient} from '@angular/common/http';

// Import our Geocoding Serivce
import { AddrToLatLonService } from "../addr-to-lat-lon/addr-to-lat-lon.service";

@Injectable({
  providedIn: 'root'
})
export class GetMapService {

  // Instance Variables
  imgUrl: string;
  key: string;
  latLng: any;

  // Constructor
  constructor(private http:HttpClient, private addrToLng:AddrToLatLonService) 
  { 
    // Key for the API
    this.key = "n4GRlJZ3GCnFZdNsDLWMlCrrmqP0O5SG";
  }

  async getMap(addr:string):Promise<any>
  {
    // Call to addr-to-lat-long service to convert string to LAT, LNG
    await this.addrToLng.getLatLong(addr);
    this.latLng = this.addrToLng.details["results"][0].locations[0].latLng

    // For DEBUG ONLY
    // console.log(this.latLng = this.addrToLng.details["results"][0].locations[0].latLng);
    // let details = await response.json();


    this.imgUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=${this.key}&locations=${this.latLng.lat},${this.latLng.lng}&zoom=18&size=@2x&type=hyb&size=2400,2400`;
    return this.imgUrl
  }


}
