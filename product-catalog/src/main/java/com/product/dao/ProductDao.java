package com.product.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.product.entity.Product;
@Repository
public interface ProductDao extends MongoRepository<Product,String> {
public Page<Product> findAll(Pageable pageable);
public Page<Product> findByProductNameContainingIgnoreCaseOrProductDescriptionContainingIgnoreCase(
		String key1, String key2,Pageable pageable);
}
