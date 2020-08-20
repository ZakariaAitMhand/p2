package dev.project2.repos;

import dev.project2.entities.Agent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface AgentRepository extends CrudRepository<Agent, Integer>
{
}
