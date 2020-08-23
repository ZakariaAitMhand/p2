import { Component, OnInit,Input } from '@angular/core';
import { Agent } from '../../models/agent';
import { AgentService } from '../../services/agent/agent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.css']
})
export class AgentCardComponent implements OnInit {

  @Input("agent") agent:Agent;
  phoneNumber:string;
  image_url:string;
  name:string;

  agentCard:Agent;


  constructor(private agentServ:AgentService, private router:Router) { }

  ngOnInit(): void {
    this.agentCard = this.agent;
  }

  async agentClick(){
    alert("agent card was clicked");
    this.agentServ.agentProperties = await this.agentServ.getAllAgentsProperties(this.agentCard.aid);
    this.router.navigate(['/agentproperties'])
  }
    
}
