package services;

import dev.project2.entities.Agent;
import dev.project2.entities.Property;
import dev.project2.entities.PropertyType;
import dev.project2.repos.PropertyRepository;
import dev.project2.services.PropertyService;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;


@SpringBootTest(classes=dev.project2.app.Project2Application.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@RunWith(SpringRunner.class)
class PropertyServiceTest
{

    @MockBean
    private PropertyRepository pr;

    @Autowired
    private PropertyService ps;

    private Agent testAgent= new Agent(1,
            "Test Agent",
            "password!",
            "test.png",
            "email@email.com",
            "201-551-1111");

    private PropertyType testPropertyType= new PropertyType(1,
            "Apartment");

    private Property testProperty = new Property(
            1,
            700000,
            7234,
            false,
            "property3.png",
            "333 anywhere st. Anywhere, MD 77777",
            testAgent,
            testPropertyType);

    private List<Property> testWith = new ArrayList<Property>();

    {
        testWith.add(testProperty);
        testWith.add(new Property(2,
                200000,
                2000,
                true,
                "test2.png",
                "201-551-2222",
                testAgent,
                testPropertyType));
    }

    @Test
    @Order(1)
    void createProperty()
    {

        Mockito.when(pr.save(testProperty)).thenReturn(testProperty);
        Property result = ps.createProperty(testProperty);
        Assertions.assertNotEquals(0, result.getPid());

        Mockito.verify(pr).save(testProperty);
    }

    @Test
    @Order(2)
    void getPropertyById()
    {
        Mockito.when(pr.findById(1)).thenReturn(java.util.Optional.ofNullable(testProperty));
        Property result = ps.getPropertyById(1);
        Assertions.assertNotEquals(0, result.getPid());
        Mockito.verify(pr).findById(1);
    }

    @Test
    @Order(3)
    void getAllProperties()
    {
        Mockito.when(pr.findAll()).thenReturn(testWith);
        List<Property> results = ps.getAllProperties();

        Assertions.assertNotEquals(0, results.size());
        Mockito.verify(pr).findAll();
    }

    @Test
    @Order(4)
    void getPropertiesFromLowToHigh()
    {
        Mockito.when(pr.findByOrderByPriceAsc()).thenReturn(testWith);
        List<Property> result = ps.getPropertiesFromLowToHigh();
        System.out.println(result);
        Assertions.assertEquals(200000, result.get(1).getPrice());
    }

    @Test
    @Order(5)
    void getPropertiesFromHighToLow()
    {
        Mockito.when(pr.findByOrderByPriceDesc()).thenReturn(testWith);

        List<Property> result = ps.getPropertiesFromHighToLow();
        System.out.println(result);
        Assertions.assertNotEquals(0, result);
    }

    @Test
    @Order(6)
    void getPropertiesMatchingString()
    {
        Mockito.when(pr.findByLocationContaining("md")).thenReturn(testWith);
        List<Property> result = ps.getPropertiesMatchingString("md");

        Assertions.assertNotEquals(0, result.size());
    }

    @Test
    @Order(7)
    void updateProperty()
    {
        testWith.get(0).setPrice(250000);
        Mockito.when(pr.save(testProperty)).thenReturn(testWith.get(0));

        Property result = ps.updateProperty(testProperty);
        Assertions.assertEquals(250000, result.getPrice());

        Mockito.verify(pr).save(testProperty);
    }

}