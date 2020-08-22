import { Component, OnInit } from '@angular/core';
import { GetMapService } from "../../services/get-map/get-map.service";

@Component({
  selector: 'app-simple-map',
  templateUrl: './simple-map.component.html',
  styleUrls: ['./simple-map.component.css']
})
export class SimpleMapComponent implements OnInit {

  imagePath: string;

  constructor(private getMap:GetMapService) { }

  ngOnInit(): void {
    // For testing Purposes only
    // COMMENT OUT FOR PRODUCTION/LIVE
    this.testMap();
  }

  async testMap()
  {
    await this.getMap.getMap("84 columbia avenue 07307");
    this.imagePath = this.getMap.imgUrl;
  }
}
