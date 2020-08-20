import { Injectable } from '@angular/core';
import { Agent } from '../../models/agent';
import { Credentials } from '../../models/credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }

  loggedInAgent:Agent;

  async login(credentials:Credentials):Promise<void>{
    this.loggedInAgent = new Agent(1, 'username', 'password', 'image_url', 'email', 'phone',[]);
    // agent = await this.http.post<Agent>(`http://localhost:8080/agents/`,agent).toPromise();
  }
  
  // async createAgent(agent:Agent):Promise<Agent>{
  //   agent = await this.http.post<Agent>(`http://localhost:8080/agents/`,agent).toPromise();
  //   return agent;
  // }

  async getAllAgents():Promise<Array<Agent>>{
    const agents:Array<Agent> = await this.http.get<Array<Agent>>("http://localhost:8080/agents").toPromise();
    return agents;
  }

  async getAgentById(id:number):Promise<Agent>{
    const agent:Agent = await this.http.get<Agent>(`http://localhost:8080/agents/${id}`).toPromise();
    return agent;
  }
}
