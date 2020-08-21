package dev.project2.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="AGENT")
public class Agent
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "aid")
    private int aid;
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="image_url")
    private String image_url;
    @Column(name="email")
    private String email;
    @Column(name="phone")
    private String phone;

    @OneToMany(mappedBy = "agent")
//    @JsonBackReference
    private transient List<Property> propertyList;

    public Agent()
    {
    }

    public Agent(int aid, String username, String password, String image_url, String email, String phone)
    {
        this.aid = aid;
        this.username = username;
        this.password = password;
        this.image_url = image_url;
        this.email = email;
        this.phone = phone;
    }

    public int getAid()
    {
        return aid;
    }

    public void setAid(int aid)
    {
        this.aid = aid;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public String getImage_url()
    {
        return image_url;
    }

    public void setImage_url(String image_url)
    {
        this.image_url = image_url;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPhone()
    {
        return phone;
    }

    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public List<Property> getPropertyList()
    {
        return propertyList;
    }

    public void setPropertyList(List<Property> propertyList)
    {
        this.propertyList = propertyList;
    }

    @Override
    public String toString()
    {
        return "Agent{" +
                "aid=" + aid +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", image_url='" + image_url + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
