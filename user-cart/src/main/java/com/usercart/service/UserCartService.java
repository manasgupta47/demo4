package com.usercart.service;


import java.util.Optional;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usercart.dao.UserCartDao;
import com.usercart.entity.UserCart;


@Service
public class UserCartService {
@Autowired
private UserCartDao userCartDao;

public void addproductInCart(UserCart userCart) {
	Optional<UserCart> obj=userCartDao.findById(userCart.getUserName());
	if(obj.isEmpty()) {
		HashMap<String,Integer> hm=new HashMap<>();
		hm.put(userCart.getProductId(),1);
		userCart.setProductDeatils(hm);
		userCartDao.save(userCart);
	}
	else {
		HashMap<String,Integer> hm=obj.get().getProductDeatils();
			hm.put(userCart.getProductId(),1);
		userCart.setProductDeatils(hm);
		userCartDao.save(userCart);
	}
}
public UserCart removeproductFromCart(String userName,String productId) {
	UserCart obj=userCartDao.findById(userName).get();
	HashMap<String,Integer> hm=obj.getProductDeatils();
	if(hm.get(productId)==1) {
		hm.remove(productId);
	}
	else if(hm.get(productId)>1) {
		hm.put(productId, hm.get(productId)-1);
	}
	obj.setProductDeatils(hm);
	return 	userCartDao.save(obj);
	 
}
public boolean getprocuctByid(String userName,String productId) {
	return userCartDao.findById(userName).get().getProductDeatils().containsKey(productId);
}
public HashMap<String,Integer> getProductFromCart(String userName){
	return userCartDao.findById(userName).get().getProductDeatils();
}
}
