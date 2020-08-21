import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { AgentService } from 'src/app/services/agent/agent.service';

@Component({
  selector: 'app-agent-properties-display',
  templateUrl: './agent-properties-display.component.html',
  styleUrls: ['./agent-properties-display.component.css']
})
export class AgentPropertiesDisplayComponent implements OnInit {

  agentProperties:Property []

  constructor(private agentServ:AgentService) { }


  ngOnInit(): void {
    this.agentProperties = this.agentServ.agentProperties;
  }

}
