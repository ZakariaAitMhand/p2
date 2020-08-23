import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { integer } from 'aws-sdk/clients/cloudfront';
import { PropertyService } from '../../services/property/property.service';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.css']
})
export class PropertyDisplayComponent implements OnInit {
  id:number; // retrieved from the URL parameter

  propertyAdress="84 columbia avenue 07307";
  
  constructor(private propertyService:PropertyService, private route: ActivatedRoute) {
    
    this.id = Number(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
     this.propertyService.getPropertyById(this.id);
  }

  showPics:boolean[]=[
    true,
    false,
    false,
    false,
  ];

  currentThumbnailIndex:integer = 0;

  thumbnailClick(index):void{
    for (let key in this.showPics) {
      this.showPics[key] = false;
    }
    this.currentThumbnailIndex = index;
    this.showPics[index] = true;
    // console.log("thumbnailClick: " + this.currentThumbnailIndex)
  }

  incrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex++;
    if(this.currentThumbnailIndex == this.showPics.length)
      this.currentThumbnailIndex = 0;
      
    // console.log("incrementCurrentThumbnailIndex: " + this.currentThumbnailIndex)
    this.thumbnailClick(this.currentThumbnailIndex);
  }

  decrementCurrentThumbnailIndex(){
    this.currentThumbnailIndex--;
    if(this.currentThumbnailIndex < 0)
      this.currentThumbnailIndex = this.showPics.length-1;
    // console.log("decrementCurrentThumbnailIndex: " + this.currentThumbnailIndex)
    this.thumbnailClick(this.currentThumbnailIndex);
  }

}
