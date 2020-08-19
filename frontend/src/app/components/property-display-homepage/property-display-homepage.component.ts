import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-display-homepage',
  templateUrl: './property-display-homepage.component.html',
  styleUrls: ['./property-display-homepage.component.css']
})
export class PropertyDisplayHomepageComponent implements OnInit {

  @Input() newProperty:Property;
  constructor() { }

  ngOnInit(): void {
  }

  propertyClick(){
    alert("property Click")
  }

  
  property: any/*Property*/ = 
    {location: this.newProperty.location, price:this.newProperty.price, squareFeet: this.newProperty.squareFeet};

}
