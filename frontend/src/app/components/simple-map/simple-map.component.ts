import { Component, OnInit, Input } from '@angular/core';
import { GetMapService } from "../../services/get-map/get-map.service";

@Component({
  selector: 'app-simple-map',
  templateUrl: './simple-map.component.html',
  styleUrls: ['./simple-map.component.css']
})
export class SimpleMapComponent implements OnInit {

  @Input("address") address:string;
  imagePath: string;

  constructor(private getMap:GetMapService) { }

  ngOnInit(): void {
    // For testing Purposes only
    // COMMENT OUT FOR PRODUCTION/LIVE
    this.testMap(this.address);
  }

  async testMap(address)
  {
    await this.getMap.getMap(address);
    this.imagePath = this.getMap.imgUrl;
  }
}
