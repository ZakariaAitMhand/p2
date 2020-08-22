import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../../services/interaction-service/interaction.service';
import { PropertyService } from 'src/app/services/property/property.service';
import { Property } from '../../models/property';

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

  constructor(/*private interactionService:InteractionService,*/ public propServ:PropertyService) { }

  
  
  ngOnInit(): void {
    this.getAllProperties();
  }

  // backTransparent:boolean=this.interactionService.backTransparent;
  // LoginContainer:boolean=this.interactionService.LoginContainer;
  

  // loginPopup(){
  //   this.backTransparent=true;
  //   this.LoginContainer=true;
  // }



  lowToHighCost(){
    alert("low to high button");
  }

  highToLowCost(){
    alert("high to low button");
  }

  costBetween(){
    alert("cost betweeen: " + this.minValue + " and " + this.maxValue);
  }

  async getAllProperties(){
    // this.properties = await this.propServ.getAllProperties();
    this.properties = [
      {
        "pid": 1,
        "price": 100000.0,
        "square_feet": 1234.0,
        "image_url": "property1.png",
        "location": "124 anywhere st. Anywhere, NJ 11111",
        "agent": {
            "aid": 3,
            "username": "Johnny Bones",
            "password": "YouTheMan!",
            "image_url": "selfie.png",
            "email": "JohnSells@email.com",
            "phone": "201-551-1234",
            "propertyList": null
        },
        "propertyType": {
            "ptid": 3,
            "description": "House",
            "properties": null
        },
        "sold": false
    },
    {
      "pid": 2,
      "price": 100000.0,
      "square_feet": 1234.0,
      "image_url": "property1.png",
      "location": "124 anywhere st. Anywhere, NJ 11111",
      "agent": {
          "aid": 3,
          "username": "Johnny Bones",
          "password": "YouTheMan!",
          "image_url": "selfie.png",
          "email": "JohnSells@email.com",
          "phone": "201-551-1234",
          "propertyList": null
      },
      "propertyType": {
          "ptid": 3,
          "description": "House",
          "properties": null
      },
      "sold": false
  },
  {
    "pid": 3,
    "price": 100000.0,
    "square_feet": 1234.0,
    "image_url": "property1.png",
    "location": "124 anywhere st. Anywhere, NJ 11111",
    "agent": {
        "aid": 3,
        "username": "Johnny Bones",
        "password": "YouTheMan!",
        "image_url": "selfie.png",
        "email": "JohnSells@email.com",
        "phone": "201-551-1234",
        "propertyList": null
    },
    "propertyType": {
        "ptid": 3,
        "description": "House",
        "properties": null
    },
    "sold": false
  },
  {
    "pid": 4,
    "price": 100000.0,
    "square_feet": 1234.0,
    "image_url": "property1.png",
    "location": "124 anywhere st. Anywhere, NJ 11111",
    "agent": {
        "aid": 3,
        "username": "Johnny Bones",
        "password": "YouTheMan!",
        "image_url": "selfie.png",
        "email": "JohnSells@email.com",
        "phone": "201-551-1234",
        "propertyList": null
    },
    "propertyType": {
        "ptid": 3,
        "description": "House",
        "properties": null
    },
    "sold": false
    },
    {
      "pid": 5,
      "price": 100000.0,
      "square_feet": 1234.0,
      "image_url": "property1.png",
      "location": "124 anywhere st. Anywhere, NJ 11111",
      "agent": {
          "aid": 3,
          "username": "Johnny Bones",
          "password": "YouTheMan!",
          "image_url": "selfie.png",
          "email": "JohnSells@email.com",
          "phone": "201-551-1234",
          "propertyList": null
      },
      "propertyType": {
          "ptid": 3,
          "description": "House",
          "properties": null
      },
      "sold": false
    }

    ];
    // console.log("getting all properties: " + JSON.stringify(this.properties));
  }

}