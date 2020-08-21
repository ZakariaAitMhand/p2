import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
import { stringify } from 'querystring';
import { PropertyService } from 'src/app/services/property/property.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  
  @Input("property") property:Property;
   cardImage:string[] = [];

  //@Input() newProperty:Property;

  propertyHomeImage:string;

  constructor(private propServ:PropertyService, private router:Router) { }

  propertyCard: Property;
  ngOnInit(): void {
    // console.log(this.property);
    this.propertyCard = this.property;
    this.getPropertyCardHomeImage();
  }

  propertyClick(){
    // alert("property Click")
    this.propServ.propertyImages = this.cardImage;
    this.router.navigate(['/displayproperty'])
  }
  
  deletePropertyClick(id:number){
    // Call for delete endpoint
    console.log(id);
  }
//   property: any/*Property*/ = 
//     {location: this.newProperty.location, price:this.newProperty.price, squareFeet: this.newProperty.squareFeet};

getPropertyCardHomeImage(){
  this.cardImage = this.propertyCard.image_url.split(',');
}


}
