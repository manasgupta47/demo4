package com.orderdetails.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.orderdetails.entity.OrderDeatails;


public interface OrderDetailsDao extends MongoRepository<OrderDeatails,String>{

}
