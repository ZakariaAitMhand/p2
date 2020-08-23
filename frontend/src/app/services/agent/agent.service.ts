import { Injectable } from '@angular/core';
import { Agent } from '../../models/agent';
import { Property } from 'src/app/models/property';
import { Credentials } from '../../models/credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) {
    this.url = "http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/";
  }

  loggedInAgent:Agent;
  agentProperties:Property[];
  url:string;
  
  LoginContainerBackTransparent:boolean=false;
  LoginContainer:boolean=false;
  createPropertyContainerBlackTransparent:boolean=false;
  createPropertyContainer:boolean=false;

  async login(credentials:Credentials):Promise<void>{
    this.loggedInAgent = new Agent(1, 'username', 'password', 'image_url', 'email', 'phone',[]);
    localStorage.setItem('agent', JSON.stringify(this.loggedInAgent));
    // agent = await this.http.post<Agent>(`http://localhost:8080/agents/`,agent).toPromise();
    // this.loggedInAgent = new Agent(1, 'username', 'password', 'image_url', 'email', 'phone',[]);
    // localStorage.setItem('agent', JSON.stringify(this.loggedInAgent));
     //agent = await this.http.post<Agent>(`http://localhost:8080/agents/`,agent).toPromise();

    const agents:Array<Agent> = await this.getAllAgents();

    for(let agent of agents){
      if(agent.username === credentials.username){
        if(agent.password === credentials.password){
          this.loggedInAgent = agent;
        }
      }
    }

    //this.loggedInAgent = await this.http.get<Agent>(`http://ec2-18-191-220-22.us-east-2.compute.amazonaws.com:8080/agents`).toPromise();
  }
  
  // async createAgent(agent:Agent):Promise<Agent>{
  //   agent = await this.http.post<Agent>(`http://localhost:8080/agents/`,agent).toPromise();
  //   return agent;
  // }

  async getAllAgents():Promise<Array<Agent>>{
    const agents:Array<Agent> = await this.http.get<Array<Agent>>(this.url+"agents").toPromise();
    return agents;
  }

  async getAgentById(id:number):Promise<Agent>{
    const agent:Agent = await this.http.get<Agent>(this.url+`agents/${id}`).toPromise();
    return agent;
  }

  async getAllAgentsProperties(aId:number):Promise<Array<Property>>{
    const agentsProperty:Array<Property> = await this.http.get<Array<Property>>(this.url+`agents/${aId}/properties`).toPromise();
    return agentsProperty;
  }

}
