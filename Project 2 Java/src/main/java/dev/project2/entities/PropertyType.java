package dev.project2.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="PROPERTY_TYPE")
public class PropertyType
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ptid")
    private int ptid;
    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "propertyType", fetch = FetchType.EAGER)
    private List<Property> properties;

    public PropertyType()
    {
    }

    public PropertyType(int ptid, String description)
    {
        this.ptid = ptid;
        this.description = description;
    }

    public int getPtid()
    {
        return ptid;
    }

    public void setPtid(int ptid)
    {
        this.ptid = ptid;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public List<Property> getProperties()
    {
        return properties;
    }

    public void setProperties(List<Property> properties)
    {
        this.properties = properties;
    }

    @Override
    public String toString()
    {
        return "PropertyType{" +
                "ptid=" + ptid +
                ", description='" + description + '\'' +
                '}';
    }
}
