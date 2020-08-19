package services;

import dev.project2.entities.PropertyType;
import dev.project2.repos.PropertyTypeRepository;
import dev.project2.services.PropertyTypeService;
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
class PropertyTypeTest
{

    @MockBean
    private PropertyTypeRepository repository;

    @Autowired
    private PropertyTypeService service;

    PropertyType tool = new PropertyType(1,"House");

    @Test
    @Order(1)
    void createPropertyType()
    {
        Mockito.when(repository.save(tool)).thenReturn(tool);
        PropertyType result = service.createPropertyType(tool);

        Assertions.assertNotEquals(0, result.getPtid());

        Mockito.verify(repository).save(tool);
    }

    @Test
    @Order(2)
    void getPropertyTypeById()
    {
        Mockito.when(repository.findById(1)).thenReturn(java.util.Optional.ofNullable(tool));

        PropertyType result = service.getPropertyTypeById(1);
        Assertions.assertEquals(1, result.getPtid());

        Mockito.verify(repository).findById(tool.getPtid());
    }

    @Test
    @Order(3)
    void getAllPropertyTypes()
    {
        List<PropertyType> propertyTypes = new ArrayList<PropertyType>();
        propertyTypes.add(tool);
        propertyTypes.add(
                new PropertyType(2,"Flat")
        );

        Mockito.when(repository.findAll()).thenReturn(propertyTypes);

        List<PropertyType> results = service.getAllPropertyTypes();

        Assertions.assertNotEquals(0, results.size());

        Mockito.verify(repository).findAll();
    }

    @Test
    @Order(4)
    void updatePropertyType()
    {
        Mockito.when(repository.save(tool)).thenReturn(tool);
        tool.setDescription("Condo");
        PropertyType result = service.updatePropertyType(tool);

        Assertions.assertEquals("Condo", result.getDescription());

        Mockito.verify(repository).save(tool);

    }

}