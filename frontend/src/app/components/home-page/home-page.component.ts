import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../../services/interaction-service/interaction.service';
import { PropertyService } from 'src/app/services/property/property.service';
import { Property } from '../../models/property';
import { Properties } from 'aws-sdk/clients/cloudformation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() minValue:number;
  @Input() maxValue:number;
  @Input() searchValue;

  properties:Property[];
  sortOrder:number; // 0 is get all properties // 1 is sort from low to high // 2 is sort from high to low 

  constructor(/*private interactionService:InteractionService,*/ public propServ:PropertyService ) { }

  async ngOnInit() {
    //console.log('searchedProperties'+localStorage.getItem('searchedProperties'));
    if(localStorage.getItem('searchValue')==''){
      await this.getAllProperties();
    }
    else{
      this.properties = JSON.parse(localStorage.getItem('searchedProperties'));
    }

  }

  // backTransparent:boolean=this.interactionService.backTransparent;
  // LoginContainer:boolean=this.interactionService.LoginContainer;
  

  // loginPopup(){
  //   this.backTransparent=true;
  //   this.LoginContainer=true;
  // }



  async getAllProperties(){
    //console.log(localStorage.getItem('sortNumber'));
    this.sortOrder = Number(localStorage.getItem('sortNumber'));
    //console.log(this.sortOrder);
    //this.properties = await this.propServ.getAllPropertiesHighToLow()
    switch(this.sortOrder){
      case(0):
        this.properties = await this.propServ.getAllProperties();
        //console.log("getting all properties")
        break;
      case(1):
        this.properties = await this.propServ.getAllPropertiesLowToHigh();
        //console.log("sorting by low to high")
        break
      case(2):
        this.properties = await this.propServ.getAllPropertiesHighToLow();
        //console.log("sorting by high to low")
        break;
    }
      //this.properties = await this.propServ.getAllProperties();
     //console.log("times ran");
     
     //Dummy Data
  //   this.properties = [
  //     {
  //       "pid": 1,
  //       "price": 100000.0,
  //       "square_feet": 1234.0,
  //       "image_url": "property1.png",
  //       "location": "124 anywhere st. Anywhere, NJ 11111",
  //       "agent": {
  //           "aid": 3,
  //           "username": "Johnny Bones",
  //           "password": "YouTheMan!",
  //           "image_url": "selfie.png",
  //           "email": "JohnSells@email.com",
  //           "phone": "201-551-1234",
  //           "propertyList": null
  //       },
  //       "propertyType": {
  //           "ptid": 3,
  //           "description": "House",
  //           "properties": null
  //       },
  //       "sold": false
  //   },
  //   {
  //     "pid": 2,
  //     "price": 100000.0,
  //     "square_feet": 1234.0,
  //     "image_url": "property1.png",
  //     "location": "124 anywhere st. Anywhere, NJ 11111",
  //     "agent": {
  //         "aid": 3,
  //         "username": "Johnny Bones",
  //         "password": "YouTheMan!",
  //         "image_url": "selfie.png",
  //         "email": "JohnSells@email.com",
  //         "phone": "201-551-1234",
  //         "propertyList": null
  //     },
  //     "propertyType": {
  //         "ptid": 3,
  //         "description": "House",
  //         "properties": null
  //     },
  //     "sold": false
  // },
  // {
  //   "pid": 3,
  //   "price": 100000.0,
  //   "square_feet": 1234.0,
  //   "image_url": "property1.png",
  //   "location": "124 anywhere st. Anywhere, NJ 11111",
  //   "agent": {
  //       "aid": 3,
  //       "username": "Johnny Bones",
  //       "password": "YouTheMan!",
  //       "image_url": "selfie.png",
  //       "email": "JohnSells@email.com",
  //       "phone": "201-551-1234",
  //       "propertyList": null
  //   },
  //   "propertyType": {
  //       "ptid": 3,
  //       "description": "House",
  //       "properties": null
  //   },
  //   "sold": false
  // },
  // {
  //   "pid": 4,
  //   "price": 100000.0,
  //   "square_feet": 1234.0,
  //   "image_url": "property1.png",
  //   "location": "124 anywhere st. Anywhere, NJ 11111",
  //   "agent": {
  //       "aid": 3,
  //       "username": "Johnny Bones",
  //       "password": "YouTheMan!",
  //       "image_url": "selfie.png",
  //       "email": "JohnSells@email.com",
  //       "phone": "201-551-1234",
  //       "propertyList": null
  //   },
  //   "propertyType": {
  //       "ptid": 3,
  //       "description": "House",
  //       "properties": null
  //   },
  //   "sold": false
  //   },
  //   {
  //     "pid": 5,
  //     "price": 100000.0,
  //     "square_feet": 1234.0,
  //     "image_url": "property1.png",
  //     "location": "124 anywhere st. Anywhere, NJ 11111",
  //     "agent": {
  //         "aid": 3,
  //         "username": "Johnny Bones",
  //         "password": "YouTheMan!",
  //         "image_url": "selfie.png",
  //         "email": "JohnSells@email.com",
  //         "phone": "201-551-1234",
  //         "propertyList": null
  //     },
  //     "propertyType": {
  //         "ptid": 3,
  //         "description": "House",
  //         "properties": null
  //     },
  //     "sold": false
  //   }

  //   ];
    // console.log("getting all properties: " + JSON.stringify(this.properties));
  }

}