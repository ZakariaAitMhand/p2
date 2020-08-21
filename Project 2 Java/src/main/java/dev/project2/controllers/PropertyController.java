package dev.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import dev.project2.entities.Property;
import dev.project2.entities.PropertyType;
import dev.project2.entities.Agent;
import dev.project2.services.PropertyService;
import dev.project2.services.PropertyTypeService;
import dev.project2.services.AgentService;


@Component
@RestController // @ RestController says that all methods in the controller return string
@CrossOrigin("*") //enable cors anywhere
public class PropertyController {

    @Autowired
    PropertyService ps;

    @RequestMapping(value = "/properties", method = RequestMethod.GET)
    public List<Property> getAllPoperties(@RequestParam(required = false) String location,@RequestParam(required = false) boolean lth,@RequestParam(required = false) boolean htl ){

        if(location != null) {
            return this.ps.getPropertiesMatchingString(location);
        }

        if(lth == true) {
            return this.ps.getPropertiesFromLowToHigh();
        }

        if(htl == true) {
            return this.ps.getPropertiesFromHighToLow();
        }

        return this.ps.getAllProperties();
    }

    @RequestMapping(value = "/properties/{id}", method = RequestMethod.GET)
    public Property getPropertyById(@PathVariable int id) {
        return this.ps.getPropertyById(id);
    }


    @RequestMapping(value = "/properties", method = RequestMethod.POST)
    public Property createProperty(@RequestBody Property property) {
        return this.ps.createProperty(property);
    }


    @RequestMapping(value = "/properties", method = RequestMethod.PUT)
    public Property updateProperty(@RequestBody Property property) {
        return this.ps.updateProperty(property);
    }


    @RequestMapping(value = "/properties/{id}", method = RequestMethod.PUT)
    public Property updatePropertyId(@RequestBody Property property, @PathVariable int id) {
        property.setPid(id);
        return this.ps.updateProperty(property);
    }
    
    @RequestMapping(value = "/properties/{id}", method = RequestMethod.DELETE)
    public Boolean deleteProperty(@PathVariable int id) { // Spring does not like returning primitives. Use wrapper classes
        Property a = this.ps.getPropertyById(id);
        return this.ps.deleteProperty(a);
    }









}// end class