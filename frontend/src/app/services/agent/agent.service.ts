import { Injectable } from '@angular/core';
import { Agent } from '../../models/agent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }

  async createAgent(agent:Agent):Promise<Agent>{
    agent = await this.http.post<Agent>(`http://localhost:7000/agents/`,agent).toPromise();
    return agent;
  }

  async getAllAgents():Promise<Array<Agent>>{
    const agents:Array<Agent> = await this.http.get<Array<Agent>>("http://localhost:7000/agents").toPromise();
    return agents;
  }

  async getAgentById(id:number):Promise<Agent>{
    const agent:Agent = await this.http.get<Agent>(`http://localhost:7000/agents/${id}`).toPromise();
    return agent;
  }
}
