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
      {ptid:1, description: 'House', properties: null},
      {ptid:2, description: 'Condo', properties: null},
      {ptid:3, description: 'Town House', properties: null},
      {ptid:4, description: 'Land', properties: null}
    ];
  }
}
