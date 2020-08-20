import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-display-homepage',
  templateUrl: './property-display-homepage.component.html',
  styleUrls: ['./property-display-homepage.component.css']
})
export class PropertyDisplayHomepageComponent implements OnInit {

  @Input("property") property:Property;
  constructor() { }

  propertyCard: Property;
  ngOnInit(): void {
    // console.log(this.property);
    this.propertyCard = this.property;
  }

  propertyClick(){
    alert("property Click")
  }

  
  


}
