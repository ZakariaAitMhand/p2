import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../../services/interaction-service/interaction.service';
import { PropertyService } from 'src/app/services/property/property.service';
import { Property } from '../../models/property';
import { Properties } from 'aws-sdk/clients/cloudformation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() minValue:number;
  @Input() maxValue:number;
  @Input() searchValue;

  properties:Property[];
  sortOrder:number; // 0 is get all properties // 1 is sort from low to high // 2 is sort from high to low 

  constructor(public propServ:PropertyService ) { }

  async ngOnInit() {
    localStorage.setItem("onHomePage", 'true');
    if(localStorage.getItem('searchValue')==null || localStorage.getItem('searchValue')==''){
      await this.getAllProperties();
    }
    else{
      this.properties = JSON.parse(localStorage.getItem('searchedProperties'));
    }

  }




  async getAllProperties(){
    this.sortOrder = Number(localStorage.getItem('sortNumber'));
    switch(this.sortOrder){
      case(0):
        this.properties = await this.propServ.getAllProperties();
        break;
      case(1):
        this.properties = await this.propServ.getAllPropertiesLowToHigh();
        break
      case(2):
        this.properties = await this.propServ.getAllPropertiesHighToLow();
        break;
    }
  }

}