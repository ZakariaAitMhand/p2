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

  propertyAdress:string="";
  image_url_array:string[];
  property:Property;
  baseImage:string;
  Updateable:boolean;

  priceField:number; 
  squareFeetField:number;
  addressField:string;
  propertyTypeField:PropertyType;
  propertyTypes: PropertyType[];
  propertyTypeFieldDescription:string;
  constructor(
    private propertyService:PropertyService,
    private route: ActivatedRoute,
    public agentService:AgentService,
    private propertyTypeService:PropertyTypeService) {
    
    this.id = Number(this.route.snapshot.params.id);
  }
  
  async updateProperty():Promise<void>{

    let testAgent = {
      "aid" : this.agentService.loggedInAgent.aid,
      "username": this.agentService.loggedInAgent.username,
      "password" : this.agentService.loggedInAgent.password,
      "image_url" : this.agentService.loggedInAgent.image_url,
      "email":this.agentService.loggedInAgent.email,
      "phone" :this.agentService.loggedInAgent.phone,
      "propertyList" : null
    };

    let testPropType = {
        "ptid": this.property.propertyType.ptid,
        "description": this.property.propertyType.description,
        "properties" : null
    };
    
    this.property.price = this.priceField;
    this.property.square_feet = this.squareFeetField;
    this.property.location = this.addressField;
    this.property.sold = this.property.sold;
    this.property.agent = testAgent;
    this.property.propertyType = testPropType;

    let responseNewImages = await this.propertyService.updateProperty(this.property);
    window.location.reload();
  }
  propertyTypeChange(val:number){
  }
  async ngOnInit(): Promise<void> {
    
    localStorage.setItem("onHomePage", 'false');
    this.property = await this.propertyService.getPropertyById(this.id);
    this.propertyAdress = this.property.location;
    this.Updateable = (this.agentService.loggedInAgent!==undefined && this.agentService.loggedInAgent.aid==this.property.agent.aid)?true:false;
    this.image_url_array = this.property.image_url.split(',');
    for (let key in this.image_url_array) {
      this.image_url_array[key] = this.propertyService.ImageBaseUrl + this.image_url_array[key];
    }
  
    this.getAllPropertyTypes();
    this.priceField = this.property.price;
    this.squareFeetField = this.property.square_feet;
    this.addressField = this.property.location;
    this.propertyTypeField = this.property.propertyType;
    this.propertyTypeFieldDescription = this.property.propertyType.description;
  }

  async getAllPropertyTypes():Promise<void>{
    await this.propertyTypeService.getAllPropertyTypes();
    this.propertyTypes = this.propertyTypeService.propertyTypes;
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
  }

  incrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex++;
    if(this.currentThumbnailIndex == this.showPics.length)
      this.currentThumbnailIndex = 0;
      
    this.thumbnailClick(this.currentThumbnailIndex);
  }

  decrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex--;
    if(this.currentThumbnailIndex < 0)
      this.currentThumbnailIndex = this.showPics.length-1;
    this.thumbnailClick(this.currentThumbnailIndex);
  }

}
