package dev.project2.repos;

import dev.project2.entities.PropertyType;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

@SpringBootTest(classes=dev.project2.app.Project2Application.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PropertyTypeRepoTest
{
    @Autowired
    private PropertyTypeRepository ptr;

    PropertyType sheep = new PropertyType(0,"Apartment");
    private static int sheepId;

    @Test
    @Order(1)
    void testCreateNewPropertyType()
    {
        PropertyType result = ptr.save(sheep);
        sheepId = result.getPtid();
        Assertions.assertNotEquals(0, result.getPtid());
    }

    @Test
    @Order(2)
    void testGetPropertyTypeById()
    {
        PropertyType result = ptr.findById(1).get();
        Assertions.assertEquals(1, result.getPtid());
    }

    @Test
    @Order(3)
    void testGetAllPropertyTypes()
    {
        List<PropertyType> propertyTypes = (List<PropertyType>) ptr.findAll();
        Assertions.assertNotEquals(0, propertyTypes.size());
    }

    @Test
    @Order(4)
    void testUpdatePropertyType()
    {
        PropertyType updateMe = ptr.findById(1).get();
        updateMe.setDescription("Flat");
        PropertyType result = ptr.save(updateMe);
        Assertions.assertEquals("Flat", result.getDescription());
    }

    @Test
    @Order(5)
    void testDeletePropertyType()
    {
        PropertyType deleteMe = ptr.findById(1).get();
        float before = ptr.count();
        ptr.delete(deleteMe);
        float after = ptr.count();

        Assertions.assertEquals(true, (before>after));
    }

}
