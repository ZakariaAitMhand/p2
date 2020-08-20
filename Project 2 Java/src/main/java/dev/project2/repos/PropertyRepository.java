package dev.project2.repos;


import dev.project2.entities.Property;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PropertyRepository extends CrudRepository<Property,Integer>
{
    List<Property> findByOrderByPriceAsc();
    List<Property> findByOrderByPriceDesc();
    List<Property> findByLocationContaining(String address);

}
