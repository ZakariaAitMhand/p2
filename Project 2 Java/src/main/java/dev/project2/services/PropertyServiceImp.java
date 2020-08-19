package dev.project2.services;

import dev.project2.entities.Property;
import dev.project2.repos.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class PropertyServiceImp implements PropertyService
{
    @Autowired
    private  PropertyRepository pr;

    @Override
    public Property createProperty(Property property)
    {
        return pr.save(property);
    }

    @Override
    public Property getPropertyById(int pid)
    {
        return pr.findById(pid).get();
    }

    @Override
    public List<Property> getAllProperties()
    {
        return (List<Property>)pr.findAll();
    }

//    TODO
    @Override
    public List<Property> getPropertiesFromLowToHigh(double price)
    {
        return null;
    }

//    TODO
    @Override
    public List<Property> getPropertiesFromHighToLow(double price)
    {
        return null;
    }

//    TODO
    @Override
    public List<Property> getPropertiesMatchingString(String query)
    {
        return null;
    }

    @Override
    public Property updateProperty(Property property)
    {
        return pr.save(property);
    }

    @Override
    public Boolean deleteProperty(Property property)
    {
        float before = pr.count();
        pr.delete(property);
        float after = pr.count();

        if(before>after)
            return true;

        return false;
    }
}
