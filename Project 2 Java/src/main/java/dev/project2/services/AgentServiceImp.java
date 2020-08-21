package dev.project2.services;

import dev.project2.entities.Agent;
import dev.project2.repos.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class AgentServiceImp implements AgentService
{

    @Autowired
    private AgentRepository ar;

    @Override
    public Agent createNewAgent(Agent agent)
    {
        return ar.save(agent);
    }

    @Override
    public Agent getAgentById(int aid)
    {
        return ar.findById(aid).get();
    }

    @Override
    public List<Agent> getAllAgents()
    {
        List<Agent> agents = (List<Agent>) ar.findAll();
        return agents;
    }

    @Override
    public Agent updateAgent(Agent agent)
    {
        return ar.save(agent);
    }

    @Override
    public Boolean deleteAgent(Agent agent)
    {
        float before = ar.count();

        ar.delete(agent);

        float after = ar.count();

        if (before> after)
            return true;
        else
            return false;
    }
}
