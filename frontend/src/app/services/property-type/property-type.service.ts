import { Injectable } from '@angular/core';
import { PropertyType } from '../../models/property-type';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {

  propertyTypes:PropertyType[];
  
  constructor() { }

  getAllPropertyTypes():void{
    // http call;
    this.propertyTypes = [
      {ptid:1, description: 'Apartment', properties: []},
      {ptid:2, description: 'House', properties: []},
      {ptid:3, description: 'Condo', properties: []}
    ];
  }
}
