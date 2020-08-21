import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from '../../services/property/property.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input("searchBar") searchBar:boolean = true;
  property:Property;

  constructor(private propServ:PropertyService) { }
  // srch:string = "fas";
  ngOnInit(): void {
  }


  performSearch(value: string):void{
    alert(value);
    this.getPropertyByAddress(value);
    this.propServ.isSearching = true;
  }

  onSearchEnter(value: string) {
    this.performSearch(value); 
  }

  async getPropertyByAddress(searchValue:string){
      this.property = await this.propServ.getPropertyByAddress(searchValue);
      console.log("Address found: "  + this.property);
  }
}
