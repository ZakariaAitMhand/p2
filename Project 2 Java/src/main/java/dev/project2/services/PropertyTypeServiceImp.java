package dev.project2.services;

import dev.project2.entities.PropertyType;
import dev.project2.repos.PropertyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@Component
@Service
public class PropertyTypeServiceImp implements PropertyTypeService
{
    @Autowired
    private  PropertyTypeRepository ptr;


    @Override
    public PropertyType createPropertyType(PropertyType property)
    {
        return ptr.save(property);
    }

    @Override
    public PropertyType getPropertyTypeById(int id)
    {
        return ptr.findById(id).get();
    }

    @Override
    public List<PropertyType> getAllPropertyTypes()
    {
        return (List<PropertyType>) ptr.findAll();
    }

    @Override
    public PropertyType updatePropertyType(PropertyType propertyType)
    {
        return ptr.save(propertyType);
    }

    @Override
    public Boolean deletePropertyType(PropertyType propertyType)
    {
        float before = ptr.count();
        ptr.delete(propertyType);
        float after = ptr.count();
        return before > after;
    }
}
