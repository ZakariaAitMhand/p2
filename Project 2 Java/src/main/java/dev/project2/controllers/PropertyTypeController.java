package dev.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import dev.project2.entities.PropertyType;
import dev.project2.services.PropertyTypeService;


@Component
@RestController // @ RestController says that all methods in the controller return string
@CrossOrigin("*") //enable cors anywhere
public class PropertyTypeController {

    @Autowired
    PropertyTypeService pts;

    @RequestMapping(value = "/propertytypes", method = RequestMethod.GET)
    public List<PropertyType> getAllPropertyTypes(){
        return this.pts.getAllPropertyTypes();
    }

    @RequestMapping(value = "/propertytypes/{id}", method = RequestMethod.GET)
    public PropertyType getPropertyTypeById(@PathVariable int id) {
        return this.pts.getPropertyTypeById(id);
    }


    @RequestMapping(value = "/propertytypes", method = RequestMethod.POST)
    public PropertyType createPropertyType(@RequestBody PropertyType propertyType) {
        return this.pts.createPropertyType(propertyType);
    }

    @RequestMapping(value = "/propertytypes", method = RequestMethod.PUT)
    public PropertyType updatePropertyType(@RequestBody PropertyType propertyType) {
        return this.pts.updatePropertyType(propertyType);
    }


    @RequestMapping(value = "/propertytypes/{id}", method = RequestMethod.PUT)
    public PropertyType updatePropertyType(@RequestBody PropertyType propertyType, @PathVariable int id) {
        propertyType.setPtid(id);
        return this.pts.updatePropertyType(propertyType);
    }



    @RequestMapping(value = "/propertytypes/{id}", method = RequestMethod.DELETE)
    public Boolean deletePropertyType(@PathVariable int id) { // Spring does not like returning primitives. Use wrapper classes
        PropertyType p = this.pts.getPropertyTypeById(id);
        return this.pts.deletePropertyType(p);
    }



}