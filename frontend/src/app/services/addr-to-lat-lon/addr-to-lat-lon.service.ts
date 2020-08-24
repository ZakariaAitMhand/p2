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
  }
}
