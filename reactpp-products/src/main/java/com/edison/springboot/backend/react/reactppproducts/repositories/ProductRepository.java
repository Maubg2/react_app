package com.edison.springboot.backend.react.reactppproducts.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edison.springboot.backend.react.reactppproducts.entities.Product;

@CrossOrigin(origins = "http://localhost:5173")
@RepositoryRestResource(path = "products")
public interface ProductRepository extends CrudRepository<Product, Long>{

}
