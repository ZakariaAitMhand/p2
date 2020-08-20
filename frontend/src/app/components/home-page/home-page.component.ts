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
    this.properties = await this.propServ.getAllProperties();
    console.log("getting all properties: " + this.properties);
  }

}