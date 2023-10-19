package com.orderhistory.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.orderhistory.entity.OrderHistory;


public interface OrderHistoryDao extends MongoRepository<OrderHistory,String>{

}
