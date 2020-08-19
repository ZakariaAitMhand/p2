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
  property:Property;

  constructor(/*private interactionService:InteractionService,*/ private propServ:PropertyService) { }

  
  
  ngOnInit(): void {
  }

  // backTransparent:boolean=this.interactionService.backTransparent;
  // LoginContainer:boolean=this.interactionService.LoginContainer;
  

  // loginPopup(){
  //   this.backTransparent=true;
  //   this.LoginContainer=true;
  // }



  async search() {
    
    this.property = await this.propServ.getPropertyByAddress(this.searchValue);
    console.log("Address found: "  + this.property);
    alert("search for " +  this.searchValue);
    this.searchValue = "";
    
  }

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
    console.log("getting properties");
    this.properties = await this.propServ.getAllProperties();
    console.log("getting all properties: " + this.properties);
    
    let cardBody = document.getElementById("propertyCards");
    let newCard : string = `<app-property-display-homepage></app-property-display-homepage>`;  
    
    cardBody.innerHTML = newCard;
    let insertPrice = document.getElementsByTagName("app-property-display-homepage");
  }

}