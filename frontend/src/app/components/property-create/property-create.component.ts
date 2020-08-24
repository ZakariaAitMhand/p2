import { Component,OnInit } from '@angular/core';
import{ImageUploadService} from '../../services/image-upload.service';
import { DropFileComponent } from '../drop-file/drop-file.component';
import { Property } from '../../models/property';
import { Agent } from '../../models/agent';
import { PropertyService } from 'src/app/services/property/property.service';
import { PropertyTypeService } from 'src/app/services/property-type/property-type.service';
import { AgentService } from 'src/app/services/agent/agent.service';
import { PropertyType } from 'src/app/models/property-type';
@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit  {
  propertyTypes: PropertyType[];
  propertyTypeField: PropertyType;

  priceField:number;
  addressField:string;
  squareFeetField:number;
  propertyImageUrls:string;  
  propertyTypeChange(val){
  }
  ngOnInit():void {
    this.getAllPropertyTypes();
  }

  async getAllPropertyTypes():Promise<void>{
    await this.propertyTypeService.getAllPropertyTypes();
    this.propertyTypes = this.propertyTypeService.propertyTypes;
  }

  constructor(
    private uploadService: ImageUploadService, 
    private propServ:PropertyService,
    private agentService:AgentService,
    private propertyTypeService:PropertyTypeService
    ){
  //constructor(private uploadService: ImageUploadService, public propServ:PropertyService){

    
  }

  
  //uploading images to bucket
   newPropertyImages(propertyId:string){
      let imageFiles = this.uploadService.fileImport;
      let foldername:string = this.addressField.toString();
      for(let image of imageFiles){
        this.uploadService.createFolderAndUploadImages(image, propertyId);
      }
      this.propertyImageUrls = this.uploadService.imageCollection.join(",");
  }



  

  async createProperty(){
    if(this.priceField == 0 || this.priceField === undefined 
       || this.addressField == "" || this.addressField == undefined 
       || this.squareFeetField == 0 || this.squareFeetField === undefined 
       || this.uploadService.fileImport === undefined
     ){
       alert("empty fields");
    }
   else{

     let testAgent = {
       "aid" : this.agentService.loggedInAgent.aid,
       "username": this.agentService.loggedInAgent.username,
       "password" : this.agentService.loggedInAgent.password,
       "image_url" : this.agentService.loggedInAgent.image_url,
       "email":this.agentService.loggedInAgent.email,
       "phone" :this.agentService.loggedInAgent.phone
     };

     let testPropType = {
         "ptid": this.propertyTypeField.ptid,
         "description": this.propertyTypeField.description
     };
     let newProperty = {
       "pid":0,
       "price": this.priceField, 
       "location":this.addressField, 
       "square_feet":this.squareFeetField, 
       "image_url": "",
       "agent":testAgent,
       "propertyType": testPropType,
       "sold":false
     };
     
     let returnProp = await this.propServ.createProperty(newProperty);

     // Since we get a NEW PROPERTY MODEL/OBJECT back from the API
     // We get the PID created and pass it to the NEWPROPERTYIMAGES() function
     // This should be the filename the image is stored under.
     this.newPropertyImages(returnProp["pid"].toString());
     returnProp.image_url = this.propertyImageUrls;
     let responseNewImages = await this.propServ.updateProperty(returnProp);
     this.priceField = undefined;
     this.addressField = "";
     this.squareFeetField = undefined;
     this.uploadService.imageCollection = [];
   }
 }
}
