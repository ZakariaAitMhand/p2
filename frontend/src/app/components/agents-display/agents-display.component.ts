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
    this.getAllAgents();
  }


  async getAllAgents(){
    //this.agents = await this.agentServ.getAllAgents;
    this.agents = [{
      "aid": 0,
      "username": "charles",
      "password": "testPassword",
      "image_url": "1597967640767asdds/1597967640767house1.JPG,1597967640764asdds/1597967640764house2.JPG,1597967640759asdds/1597967640759house3.JPG,1597967640737asdds/1597967640737house4.JPG",
      "email": "testemail@gmail.com",
      "phone": "444-444-4444",
      "propertyList": [{
        "pid": 1,
        "price": 100000.0,
        "square_feet": 1234.0,
        "image_url": "1597967640737asdds/1597967640737house4.JPG,1597967640759asdds/1597967640759house3.JPG,1597967640764asdds/1597967640764house2.JPG,1597967640767asdds/1597967640767house1.JPG",
        "location": "124 anywhere st. Anywhere, NJ 11111",
        "agent": {
            "aid": 3,
            "username": "Johnny Bones",
            "password": "YouTheMan!",
            "image_url": "selfie.png",
            "email": "JohnSells@email.com",
            "phone": "201-551-1234",
            "propertyList": null
        },
        "propertyType": {
            "ptid": 3,
            "description": "House",
            "properties": null
        },
        "sold": false
      },
      {
        "pid": 2,
        "price": 100000.0,
        "square_feet": 1234.0,
        "image_url": "1597967640767asdds/1597967640767house1.JPG,1597967640764asdds/1597967640764house2.JPG,1597967640759asdds/1597967640759house3.JPG,1597967640737asdds/1597967640737house4.JPG",
        "location": "124 anywhere st. Anywhere, NJ 11111",
        "agent": {
            "aid": 3,
            "username": "Johnny Bones",
            "password": "YouTheMan!",
            "image_url": "selfie.png",
            "email": "JohnSells@email.com",
            "phone": "201-551-1234",
            "propertyList": null
        },
        "propertyType": {
            "ptid": 3,
            "description": "House",
            "properties": null
        },
        "sold": false
      }
    ]

    },
    {
      "aid": 0,
      "username": "James",
      "password": "testPassword",
      "image_url": "1597967640767asdds/1597967640767house1.JPG,1597967640764asdds/1597967640764house2.JPG,1597967640759asdds/1597967640759house3.JPG,1597967640737asdds/1597967640737house4.JPG",
      "email": "yes@gmail.com",
      "phone": "333-333-3333",
      "propertyList": null 
    },
    {
      "aid": 0,
      "username": "Parker",
      "password": "testPassword",
      "image_url": "1597967640767asdds/1597967640767house1.JPG,1597967640764asdds/1597967640764house2.JPG,1597967640759asdds/1597967640759house3.JPG,1597967640737asdds/1597967640737house4.JPG",
      "email": "yes@gmail.com",
      "phone": "111-111-1111",
      "propertyList": null 
    }
  
  
  
  ];
  }
}
