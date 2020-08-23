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
  url:string;
  sort:number; // 0 is get all properties // 1 is sort from low to high // 2 is sort from high to low 

  ImageBaseUrl= `https://project-p2.s3.amazonaws.com/`;

  constructor(private http:HttpClient) {
    this.url = "http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/";
  }

   async createProperty(property:Property):Promise<Property>{
    property = await this.http.post<Property>(this.url+`properties`,property).toPromise();

    return property;
  }

  async getPropertyByAddress(address:string):Promise<Property[]>{
    const property:Property[] = await this.http.get<Property[]> (this.url+`properties?location=${address}`).toPromise();
    return property;
  }

  // async getPropertyByAddress():Promise<Array<Property>>{
  //   //const property:Property = await this.http.get<Property> (this.url+properties?location=${address}).toPromise();
  //   let properties:Array<Property> = await this.getAllProperties();
  //   let newProperties:Array<Property>;
  //   for(let property of properties){
  //     if(property.location.includes(localStorage.getItem("searchInput"))){
  //       console.log("print service " + property);
  //       newProperties.push(property);
  //     }
  //   }
  //   return newProperties;

  // }


  async getAllProperties():Promise<Array<Property>>{
    const properties:Array<Property> = await this.http.get<Array<Property>>(this.url+`properties`).toPromise();
    return properties;
  }

  async getAllPropertiesLowToHigh(){
    const properties:Array<Property> = await this.http.get<Array<Property>>(this.url+`properties?lth=true`).toPromise();
    return properties;
  }

  async getAllPropertiesHighToLow(){
    const properties:Array<Property> = await this.http.get<Array<Property>>(this.url+`properties?htl=true`).toPromise();
    return properties;
  }

  async getPropertyById(id:number):Promise<Property>{
    const property:Property = await this.http.get<Property>(this.url+`properties/${id}`).toPromise();
    return property;
  }

  async deletePropertyById(id:number){
    await this.http.delete<Property>(this.url+`properties/${id}`).toPromise();
  }

  async getAllPropertyTypes():Promise<Array<PropertyType>>{
    const propertyTypes:Array<PropertyType> = await this.http.get<Array<PropertyType>>(this.url+`propertytypes`).toPromise();
    return propertyTypes;
  }

  async createPropertyType(propertyType:PropertyType):Promise<PropertyType>{
    propertyType = await this.http.get<PropertyType>(this.url+`propertytypes`).toPromise();
    return propertyType;
  }

  async getPropertyTypeById(id:number):Promise<PropertyType>{
    const propertyType:PropertyType = await this.http.get<PropertyType>(this.url+`agents/${id}`).toPromise();
    return propertyType;
  }

}
