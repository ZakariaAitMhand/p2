import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input("property") property:Property;
  //@Input() newProperty:Property;

  constructor() { }

  propertyCard: Property;
  ngOnInit(): void {
    // console.log(this.property);
    this.propertyCard = this.property;
  }

  propertyClick(){
    // alert("property Click")
  }
  
  deletePropertyClick(id:number){
    // Call for delete endpoint
    console.log(id);
  }
//   property: any/*Property*/ = 
//     {location: this.newProperty.location, price:this.newProperty.price, squareFeet: this.newProperty.squareFeet};


}
