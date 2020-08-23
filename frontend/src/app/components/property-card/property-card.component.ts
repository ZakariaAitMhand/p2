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
  ngOnInit(): void {
    // console.log(this.property);
    this.propertyCard = this.property;
    console.log(this.property);
    console.log(this.agentService.loggedInAgent);
    this.isDeletable = (this.agentService.loggedInAgent
        && this.property.agent.aid == this.agentService.loggedInAgent.aid)
                        ?true:false;
  }

  propertyClick(id){
    // alert("property Click")
  }
  
  deletePropertyClick(id:number){
    alert(id);
    this.propertyService.deletePropertyById(id);
  }
//   property: any/*Property*/ = 
//     {location: this.newProperty.location, price:this.newProperty.price, squareFeet: this.newProperty.squareFeet};


}
