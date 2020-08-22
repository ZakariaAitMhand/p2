import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';
import {PropertyService} from '../../services/property/property.service';
import {HomePageComponent} from '../home-page/home-page.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private homePage:HomePageComponent;
  constructor(public agentService:AgentService, private router:Router, private propertyService:PropertyService) { }

  isLogedIn:boolean = (this.agentService.loggedInAgent===undefined)?false:true;
  ngOnInit(): void {
    // console.log("from menu "+this.agentService.loggedInAgent);
  }

  agentsBtnClick():void{
    this.router.navigate(['/displayagents']);
    // console.log("loggedInAgent " + this.agentService.loggedInAgent);
  }

  backTransparent:boolean=false;
  LoginContainer:boolean=false;
  createPropertyContainer:boolean=false;

  loginPopup(){
    this.backTransparent=true;
    this.LoginContainer=true;
  }

  logoutClick(){
    this.agentService.loggedInAgent = undefined;
  }


  loginPopupClose(){
    this.backTransparent=false;
    this.LoginContainer=false;
  }

  createPropertyClose(){
    this.backTransparent=false;
    this.createPropertyContainer=false;
  }

  createProperty(){
    this.backTransparent=true;
    this.createPropertyContainer=true;
  }

  async highToLow(){
    //this.homePage.properties = await this.propertyService.getAllPropertiesHighToLow();
    console.log("getting all properties high to low");

  }

  async lowToHigh(){
    //this.homePage.properties = await this.propertyService.getAllPropertiesLowToHigh();
    console.log("getting all properties low to high");

  }
}
