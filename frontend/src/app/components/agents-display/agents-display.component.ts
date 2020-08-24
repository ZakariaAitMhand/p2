import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';
import { AgentService } from 'src/app/services/agent/agent.service';

@Component({
  selector: 'app-agents-display',
  templateUrl: './agents-display.component.html',
  styleUrls: ['./agents-display.component.css']
})
export class AgentsDisplayComponent implements OnInit {

  agents:Agent[] = [];

  constructor(private agentServ:AgentService) { }

  ngOnInit(): void {
    localStorage.setItem("onHomePage", 'false');
    this.getAllAgents();
  }


  async getAllAgents(){
     this.agents = await this.agentServ.getAllAgents();

  }
}
