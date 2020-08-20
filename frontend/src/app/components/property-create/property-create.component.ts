import { Component,OnInit } from '@angular/core';
import{ImageUploadService} from '../../services/image-upload.service';
import { DropFileComponent } from '../drop-file/drop-file.component';
import { Property } from '../../models/property';
import { PropertyService } from 'src/app/services/property/property.service';
@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit  {

  ngOnInit(): void {
  }

  constructor(private uploadService: ImageUploadService, public propServ:PropertyService){
    
  }

  priceField:number;
  addressField:string;
  squareFeetField:number;

  //uploading images to bucket
   newPropertyImages(){
    let imageFiles = this.uploadService.fileImport;
    console.log(this.addressField);
    let foldername:string = this.addressField.toString();
    for(let image of imageFiles){
    this.uploadService.createFolderAndUploadImages(image, foldername);
    }

  }


  propertyTypes: any/*PropertyType[]*/ = [
    {value: '0', viewValue: 'Appartment'},
    {value: '1', viewValue: 'House'},
    {value: '2', viewValue: 'Condo'}
  ];

  

  async createProperty(){

    this.newPropertyImages();
    let newProperty = new Property(this.priceField, this.addressField, this.squareFeetField, this.uploadService.folderImport);
    newProperty = await this.propServ.createProperty(newProperty);

    console.log("Property created: "  + newProperty);

    this.priceField = undefined;
    this.addressField = "";
    this.squareFeetField = undefined;

  }
}
