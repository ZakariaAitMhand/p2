import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from 'src/app/models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) {   }

   async createProperty(property:Property):Promise<Property>{
    property = await this.http.post<Property>(`http://localhost:7000/agents/${property.aId}/properties`,property).toPromise();
    return property;
  }

  async getPropertyByAddress(address:string):Promise<Property>{
    const property:Property = await this.http.get<Property>(`http://localhost:7000/properties/${address}`).toPromise();
    return property;
  }

  async getAllProperties():Promise<Array<Property>>{
    const properties:Array<Property> = await this.http.get<Array<Property>>("http://localhost:7000/properties").toPromise();
    return properties;
  }

}
