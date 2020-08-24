import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
import { AgentService } from '../../services/agent/agent.service';
import { PropertyService } from 'src/app/services/property/property.service';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input("property") property:Property;
  //@Input() newProperty:Property;


  constructor(public agentService:AgentService, public propertyService: PropertyService) { }

  propertyCard: Property;
  isDeletable:boolean;

  baseImage:string;
  image_url_array:string[];

  ngOnInit(): void {
    this.propertyCard = this.property;
    this.isDeletable = (this.agentService.loggedInAgent
        && this.property.agent.aid == this.agentService.loggedInAgent.aid)?true:false;

    this.image_url_array = this.propertyCard.image_url.split(',');
    this.baseImage = this.propertyService.ImageBaseUrl + this.image_url_array[0];
  }
  propertyClick(id){
  }
  
  async deletePropertyClick(id:number){
    alert("Your are about to delete a property !!!!!!!");
    await this.propertyService.deletePropertyById(id);
    location.reload();
  }
//   property: any/*Property*/ = 
//     {location: this.newProperty.location, price:this.newProperty.price, squareFeet: this.newProperty.squareFeet};


}
