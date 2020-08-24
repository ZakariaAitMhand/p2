import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { integer } from 'aws-sdk/clients/cloudfront';
import { PropertyService } from '../../services/property/property.service';
import { AgentService } from '../../services/agent/agent.service';
import { PropertyTypeService } from '../../services/property-type/property-type.service';
import { Property } from '../../models/property';
import { PropertyType } from '../../models/property-type';
@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.css']
})
export class PropertyDisplayComponent implements OnInit {
  id:number; // retrieved from the URL parameter

  propertyAdress:string="84 columbia avenue 07307";
  image_url_array:string[];
  property:Property;
  baseImage:string;

  priceField:number; 
  squareFeetField:number;
  addressField:string;
  propertyTypeField:PropertyType;
  propertyTypes: PropertyType[];
  propertyTypeFieldDescription:string;
  
  updateProperty(){}
  propertyTypeChange(val:number){
    // console.log("propertyTypeField " + val.description)
  }
  constructor(
    private propertyService:PropertyService,
    private route: ActivatedRoute,
    public agentService:AgentService,
    private propertyTypeService:PropertyTypeService) {
    
    this.id = Number(this.route.snapshot.params.id);
  }
  async ngOnInit(): Promise<void> {
    this.property = await this.propertyService.getPropertyById(this.id);
    this.image_url_array = this.property.image_url.split(',');
    for (let key in this.image_url_array) {
      this.image_url_array[key] = this.propertyService.ImageBaseUrl + this.image_url_array[key];
    }
    // this.baseImage = this.propertyService.ImageBaseUrl + this.image_url_array[0];
    // console.log("baseImage"+this.baseImage);
  
    this.getAllPropertyTypes();
    this.priceField = this.property.price;
    this.squareFeetField = this.property.square_feet;
    this.addressField = this.property.location;
    this.propertyTypeField = this.property.propertyType;
    this.propertyTypeFieldDescription = this.property.propertyType.description;
    console.log("this.propertyTypeField = "+JSON.stringify(this.propertyTypeField))
  }

  async getAllPropertyTypes():Promise<void>{
    await this.propertyTypeService.getAllPropertyTypes();
    this.propertyTypes = this.propertyTypeService.propertyTypes;
    console.log("this.propertyTypes "+JSON.stringify(this.propertyTypes));
  }

  showPics:boolean[]=[
    true,
    false,
    false,
    false,
  ];

  currentThumbnailIndex:integer = 0;

  thumbnailClick(index):void{
    for (let key in this.showPics) {
      this.showPics[key] = false;
    }
    this.currentThumbnailIndex = index;
    this.showPics[index] = true;
    // console.log("thumbnailClick: " + this.currentThumbnailIndex)
  }

  incrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex++;
    if(this.currentThumbnailIndex == this.showPics.length)
      this.currentThumbnailIndex = 0;
      
    // console.log("incrementCurrentThumbnailIndex: " + this.currentThumbnailIndex)
    this.thumbnailClick(this.currentThumbnailIndex);
  }

  decrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex--;
    if(this.currentThumbnailIndex < 0)
      this.currentThumbnailIndex = this.showPics.length-1;
    // console.log("decrementCurrentThumbnailIndex: " + this.currentThumbnailIndex)
    this.thumbnailClick(this.currentThumbnailIndex);
  }

}
