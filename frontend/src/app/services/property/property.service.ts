import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from 'src/app/models/property';
import { Agent } from '../../models/agent';
import { PropertyType } from 'aws-sdk/clients/iotsitewise';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
 
  isSearching:boolean = false;

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

  async getPropertyById(id:number):Promise<Property>{
    const property:Property = await this.http.get<Property>(`http://localhost:7000/properties/${id}`).toPromise();
    return property;
  }

  async getAllPropertyTypes():Promise<Array<PropertyType>>{
    const propertyTypes:Array<PropertyType> = await this.http.get<Array<PropertyType>>("http://localhost:7000/propertytypes").toPromise();
    return propertyTypes;
  }

  async createPropertyType(propertyType:PropertyType):Promise<PropertyType>{
    propertyType = await this.http.get<PropertyType>(`http://localhost:7000/propertytypes`).toPromise();
    return propertyType;
  }

  async getPropertyTypeById(id:number):Promise<PropertyType>{
    const propertyType:PropertyType = await this.http.get<PropertyType>(`http://localhost:7000/agents/${id}`).toPromise();
    return propertyType;
  }
}
