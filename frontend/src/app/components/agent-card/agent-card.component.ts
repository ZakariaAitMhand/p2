import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.css']
})
export class AgentCardComponent implements OnInit {

  phoneNumber:string = "444-444-4444";
  image_url:string;
  name:string = "Tommy Thompson";


  constructor() { }

  ngOnInit(): void {
  }

  agentClick(){
    alert("agent card was clicked")
  }
    
  agentCard: any = 
    {
      phoneNumber: this.phoneNumber,
      name: this.name
    };
}
