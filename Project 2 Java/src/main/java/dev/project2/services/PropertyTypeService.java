package dev.project2.services;

import dev.project2.entities.PropertyType;

import java.util.List;

public interface PropertyTypeService
{
    PropertyType createPropertyType(PropertyType property);

    PropertyType getPropertyTypeById(int id);

    List<PropertyType> getAllPropertyTypes();

    PropertyType updatePropertyType(PropertyType propertyType);

    Boolean deletePropertyType(PropertyType propertyType);

}
