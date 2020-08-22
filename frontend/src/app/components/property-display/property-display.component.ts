import { Component, OnInit, Input } from '@angular/core';
import { integer } from 'aws-sdk/clients/cloudfront';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.css']
})
export class PropertyDisplayComponent implements OnInit {
  id:number;
  constructor() { }
  ngOnInit(): void {
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
