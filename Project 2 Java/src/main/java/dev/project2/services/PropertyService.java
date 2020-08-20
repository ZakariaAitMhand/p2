package dev.project2.services;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import dev.project2.entities.Property;

import java.util.List;

public interface PropertyService
{
//    CRUD
    Property createProperty(Property property);

    Property getPropertyById(int pid);
    List<Property> getAllProperties();
    List<Property> getPropertiesFromLowToHigh();
    List<Property> getPropertiesFromHighToLow();
    List<Property> getPropertiesMatchingString(String query);



    Property updateProperty(Property property);

    Boolean deleteProperty(Property property);


}
