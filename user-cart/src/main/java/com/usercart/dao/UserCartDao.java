package com.usercart.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.usercart.entity.UserCart;
@Repository
public interface UserCartDao extends MongoRepository<UserCart,String> {

}
