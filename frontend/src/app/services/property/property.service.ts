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
  propertyImages:string[] = [];
  sort:number; // 0 is get all properties // 1 is sort from low to high // 2 is sort from high to low 

  constructor(private http:HttpClient) {   }


  async createProperty(property:any):Promise<Property>{
    let response:Property = await this.http.post<Property>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties`,property).toPromise();
    return response;
  }

  async updateProperty(property:any):Promise<Property>
  {
    let response:Property = await this.http.put<Property>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties`,property).toPromise();
    return response;
  }

  async getPropertyByAddress(address:string):Promise<Property>{
    const property:Property = await this.http.get<Property> (`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties?location=${address}`).toPromise();
    return property;
  }

  async getAllProperties():Promise<Array<Property>>{
    const properties:Array<Property> = await this.http.get<Array<Property>>("http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties").toPromise();
    return properties;
  }

  async getAllPropertiesLowToHigh(){
    const properties:Array<Property> = await this.http.get<Array<Property>>("http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties?lth=true").toPromise();
    return properties;
  }

  async getAllPropertiesHighToLow(){
    const properties:Array<Property> = await this.http.get<Array<Property>>("http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties?htl=true").toPromise();
    return properties;
  }

  async getPropertyById(id:number):Promise<Property>{
    const property:Property = await this.http.get<Property>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties/${id}`).toPromise();
    return property;
  }

  async deletePropertyById(id:number){
    await this.http.delete<Property>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/properties/${id}`).toPromise();
  }

  async getAllPropertyTypes():Promise<Array<PropertyType>>{
    const propertyTypes:Array<PropertyType> = await this.http.get<Array<PropertyType>>("http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/propertytypes").toPromise();
    return propertyTypes;
  }

  async createPropertyType(propertyType:PropertyType):Promise<PropertyType>{
    propertyType = await this.http.get<PropertyType>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/propertytypes`).toPromise();
    return propertyType;
  }

  async getPropertyTypeById(id:number):Promise<PropertyType>{
    const propertyType:PropertyType = await this.http.get<PropertyType>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/agents/${id}`).toPromise();
    return propertyType;
  }

}
