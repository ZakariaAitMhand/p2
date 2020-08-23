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
  properties:Property[];
  search:string = (localStorage.getItem('searchValue')=='')?localStorage.getItem('searchValue'):'';

  constructor(private propServ:PropertyService) { }
  // srch:string = "fas";
  ngOnInit(): void {
  }


  performSearch():void{
    // alert(this.search);
    this.getPropertyByAddress(this.search);
  }

  onSearchEnter():void{
    this.performSearch(); 
  }

  async getPropertyByAddress(searchValue:string){
      this.properties = await this.propServ.getPropertyByAddress(searchValue);
      localStorage.setItem('searchedProperties',JSON.stringify(this.properties));
      localStorage.setItem('searchValue',searchValue);
      // console.log("Address found: ");
      // console.log(this.properties);
      location.reload();
  }
}
