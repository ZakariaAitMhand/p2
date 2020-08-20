package dev.project2.repos;


import dev.project2.entities.Agent;
import dev.project2.entities.Property;
import dev.project2.entities.PropertyType;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest(classes=dev.project2.app.Project2Application.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PropertyRepoTest
{
    @Autowired
    private PropertyRepository propRepo;

    @Autowired
    private PropertyTypeRepository ptr;

    @Autowired
    private AgentRepository ar;

    PropertyType testType;
    Agent testAgent;
    Property testProp;

    @Test
    @Order(1)
    void testCreateNewProperty()
    {
        testType = ptr.findById(5).get();
        testAgent = ar.findById(4).get();
        testProp = new Property(
                0,
                700000,
                7234,
                false,
                "property3.png",
                "333 anywhere st. Anywhere, MD 77777",
                testAgent,
                testType);

        Property result = propRepo.save(testProp);

        Assertions.assertNotEquals(0, result.getPid());

    }

    @Test
    @Order(2)
    void testGetPropertyById()
    {
        Property result = propRepo.findById(1).get();
        Assertions.assertEquals(1, result.getPid());
    }

    @Test
    @Order(3)
    void testGetAllProperties()
    {
        List<Property> results = (List<Property>) propRepo.findAll();
        Assertions.assertNotEquals(0, results.size());

    }

    @Test
    @Order(4)
    void testUpdateProperty()
    {
        Property updateMe = propRepo.findById(1).get();
        updateMe.setImage_url("updatedImage");
        Property result = propRepo.save(updateMe);

        Assertions.assertEquals("updatedImage", result.getImage_url());
    }

    @Test
    @Order(5)
    void testDeleteProperty()
    {
        Property deleteMe = propRepo.findById(1).get();
        float before = propRepo.count();
        propRepo.delete(deleteMe);
        float after = propRepo.count();

        Assertions.assertTrue(before > after);
    }

    @Test
    @Order(6)
    void testGetPropertyPriceHighToLow()
    {
        List<Property> results = propRepo.findByOrderByPriceDesc();

        System.out.println(results);

        Assertions.assertEquals(700000, results.get(0).getPrice());
    }

    @Test
    @Order(7)
    void testGetPropertyPriceLowToHigh()
    {
        List<Property> results = propRepo.findByOrderByPriceAsc();

        System.out.println(results);

        Assertions.assertEquals(100000, results.get(0).getPrice());
    }

    @Test
    @Order(8)
    void testGetFindLocationByString()
    {
        List<Property> results = propRepo.findByLocationContaining("nj");
        System.out.println(results);
        Assertions.assertNotEquals(0, results.size());
    }
}
