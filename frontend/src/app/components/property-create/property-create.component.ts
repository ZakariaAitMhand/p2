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

  propertyTypeChange(val){
    // console.log("propertyTypeField " + val.description)
  }
  ngOnInit():void {
    this.getAllPropertyTypes();
  }

  async getAllPropertyTypes():Promise<void>{
    await this.propertyTypeService.getAllPropertyTypes();
    this.propertyTypes = this.propertyTypeService.propertyTypes;
    console.log("this.propertyTypes "+JSON.stringify(this.propertyTypes));
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
   newPropertyImages(){
      let imageFiles = this.uploadService.fileImport;
      console.log(this.addressField);
      let foldername:string = this.addressField.toString();
      for(let image of imageFiles){
        this.uploadService.createFolderAndUploadImages(image, foldername);
      }
  }



  

  // async 
  createProperty(){
     if(this.priceField == 0 || this.priceField === undefined 
        || this.addressField == "" || this.addressField == undefined 
        || this.squareFeetField == 0 || this.squareFeetField === undefined 
        || this.uploadService.fileImport === undefined
      ){
        alert("empty fields");
     }
    else{
      this.newPropertyImages();
      let newProperty = new Property(
        0,
        this.priceField, 
        this.addressField, 
        this.squareFeetField, 
        this.uploadService.folderImport,
        this.agentService.loggedInAgent,
        this.propertyTypeField,
        false
        );
      // newProperty = await this.propServ.createProperty(newProperty);

      console.log("Property created: "  + newProperty);

      this.priceField = undefined;
      this.addressField = "";
      this.squareFeetField = undefined;
    }
  }
}
