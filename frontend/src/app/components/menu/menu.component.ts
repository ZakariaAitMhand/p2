import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public agentService:AgentService, private router:Router) { }

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
}
