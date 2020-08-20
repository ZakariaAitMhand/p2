package dev.project2.repos;

import dev.project2.entities.Agent;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest(classes=dev.project2.app.Project2Application.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AgentRepositoryTests
{
    @Autowired
    private AgentRepository ar;


    @Test
    @Order(1)
    void testCreateAgent()
    {
       Agent result = ar.save(new Agent(0,
               "John A.",
               "myPass",
               "image.png",
               "john@email.com",
               "201-201-1234"));
       Assertions.assertNotEquals(0, result.getAid());
    }

    @Test
    @Order(2)
    void testGetAllAgents()
    {
        List<Agent> agents = (List<Agent>)ar.findAll();
//        System.out.println(agents);
        Assertions.assertNotEquals(0, agents.size());
    }


    @Test
    @Order(3)
    void testAgentById()
    {
        Agent result = ar.findById(1).get();

        Assertions.assertEquals(1, result.getAid());
    }

    @Test
    @Order(4)
    void testUpdateAgent()
    {
        Agent got = ar.findById(1).get();

        got.setEmail("NewJohn@email.com");

        Agent result = ar.save(got);

        Assertions.assertEquals("NewJohn@email.com",result.getEmail());
    }

    @Test
    @Order(5)
    void testDeleteAgent()
    {
        Agent got = ar.findById(1).get();
        float before = ar.count();
        ar.delete(got);
        float after = ar.count();
        Assertions.assertEquals(true, (before>after));
    }


}
