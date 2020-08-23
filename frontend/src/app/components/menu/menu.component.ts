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

  private homePage:HomePageComponent = new HomePageComponent(this.propertyService);
  constructor(public agentService:AgentService, private router:Router, private propertyService:PropertyService) { }
  url:string = "http://localhost:4200/";
  isLogedIn:boolean = (this.agentService.loggedInAgent===undefined)?false:true;
  ngOnInit(): void {
    // console.log("from menu "+this.agentService.loggedInAgent);
    if(localStorage.getItem('agent')){
      this.agentService.loggedInAgent = JSON.parse(localStorage.getItem('agent'));
    }
  }

  agentsBtnClick():void{
    this.router.navigate(['/displayagents']);
    // console.log("loggedInAgent " + this.agentService.loggedInAgent);
  }


  loginPopup(){
    this.agentService.LoginContainerBackTransparent=true;
    this.agentService.LoginContainer=true;
  }

  logoutClick(){
    this.agentService.loggedInAgent = undefined;
    localStorage.setItem('agent', '');
    location.reload();
  }


  loginPopupClose(){
    this.agentService.LoginContainerBackTransparent=false;
    this.agentService.LoginContainer=false;
  }

  createPropertyClose(){
    this.agentService.createPropertyContainerBlackTransparent=false;
    this.agentService.createPropertyContainer=false;
  }

  createProperty(){
    this.agentService.createPropertyContainerBlackTransparent=true;
    this.agentService.createPropertyContainer=true;
  }

  
  async highToLow(){
    localStorage.setItem('sortNumber', '2');
    location.reload();
  }

  async lowToHigh(){
    localStorage.setItem('sortNumber', '1');
    location.reload();
  }

  homeClick(){
    localStorage.setItem('searchValue', '');
    localStorage.setItem('searchedProperties', '');
    localStorage.setItem('sortNumber', '');
    // alert(window.location.href);
    if(window.location.href === this.url + "home"){
      location.reload();
    }else{
      this.router.navigate(['/home']);
    }
    
  }
}
