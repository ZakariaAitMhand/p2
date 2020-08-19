package services;

import dev.project2.entities.Agent;
import dev.project2.repos.AgentRepository;
import dev.project2.services.AgentService;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes=dev.project2.app.Project2Application.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@RunWith(SpringRunner.class)
class AgentServiceTest
{

    @MockBean
    private AgentRepository ar;

    @Autowired
    private AgentService as;

    Agent createMe = new  Agent(1,
            "Flaco J",
            "Dimelo",
            "WhatWhat.jpg",
            "flacoj@email,com",
            "551-551-5511");

    int theId;

    @Test
    @Order(1)
    void createNewAgent()
    {

        Mockito.when(ar.save(createMe)).thenReturn(createMe);
        Agent result = as.createNewAgent(createMe);
        theId = result.getAid();
        assertNotEquals(0, result.getAid());

        Mockito.verify(ar).save(createMe);
    }

    @Test
    @Order(2)
    void getAgentById()
    {
        Mockito.when(ar.findById(theId)).thenReturn(java.util.Optional.of(createMe));
        Agent result = as.getAgentById(theId);
        assertEquals(1, result.getAid());

        Mockito.verify(ar).findById(theId);
    }

    @Test
    @Order(3)
    void getAllAgents()
    {
        List<Agent> agents = new ArrayList<Agent>();
        agents.add(createMe);
        agents.add(new  Agent(1,
                "Gordo G",
                "Hambre",
                "Dique.jpg",
                "conomeng@email,com",
                "551-551-1111"));
        Mockito.when(ar.findAll()).thenReturn(agents);
        List<Agent> results = as.getAllAgents();

        System.out.println(results);
        assertNotEquals(0, results.size());

        Mockito.verify(ar).findAll();
    }

    @Test
    @Order(4)
    void updateAgent()
    {

        Mockito.when(ar.findById(theId)).thenReturn(java.util.Optional.ofNullable(createMe));
        Agent updateMe = as.getAgentById(theId);
        updateMe.setEmail("NewestEmail@email.com");

        Mockito.when(ar.save(updateMe)).thenReturn(updateMe);
        Agent result = as.updateAgent(updateMe);

        assertEquals("NewestEmail@email.com", result.getEmail());
    }


}