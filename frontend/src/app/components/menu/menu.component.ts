import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private agentService:AgentService) { }

  isLogedIn:boolean = (this.agentService.loggedInAgent===undefined)?false:true;
  ngOnInit(): void {
    // console.log("from menu "+this.agentService.loggedInAgent);
  }

  agentsBtnClick():void{
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
}
