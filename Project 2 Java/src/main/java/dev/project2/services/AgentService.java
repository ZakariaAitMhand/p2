package dev.project2.services;

import dev.project2.entities.Agent;

import java.util.List;

public interface AgentService
{
//    Basic CRUD OPS

//    CREATE
    Agent createNewAgent(Agent agent);

//    READ
    Agent getAgentById(int aid);
    List<Agent> getAllAgents();

//    UPDATE
    Agent updateAgent(Agent agent);

//    DELETE
    Boolean deleteAgent(Agent agent);

}
