import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public agentService:AgentService) { }

  isLogedIn:boolean = (this.agentService.loggedInAgent===undefined)?false:true;
  ngOnInit(): void {
    // console.log("from menu "+this.agentService.loggedInAgent);
    if(localStorage.getItem('agent')){
      this.agentService.loggedInAgent = JSON.parse(localStorage.getItem('agent'));
    }
  }

  agentsBtnClick():void{
    // console.log("loggedInAgent " + this.agentService.loggedInAgent);
  }

  loginPopup(){
    this.agentService.LoginContainerBackTransparent=true;
    this.agentService.LoginContainer=true;
  }

  logoutClick(){
    this.agentService.loggedInAgent = undefined;
    localStorage.setItem('agent', '');
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
}
