import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddrToLatLonService {


  key: string;
  lat: number;
  lng: number;
  details: any;

  constructor(private http:HttpClient) { 
    this.key = "n4GRlJZ3GCnFZdNsDLWMlCrrmqP0O5SG";
  }

  async getLatLong(addr:string):Promise<void>
  {
    
    this.details = await this.http.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${this.key}&inFormat=kvp&outFormat=json&location=${addr}&thumbMaps=false`).toPromise();
    // let result = await response.json;
    // console.table(response);
    // response.subscribe(
    //   (data) => 
    //   {
    //     console.log(data);
    //     console.log(data['results'][0].locations[0].latLng);
    //     let latlng = data['results'][0].locations[0].latLng;
    //     console.log(typeof(latlng.lat) + " " +typeof(latlng.lng))
    //     this.lat = latlng.lat;
    //     this.lng =  latlng.lng;
    //     console.log(this.lat);
    //     console.log(this.lng);
    //   }
    // );
    // return response;
  }
}
