package com.usercart.entity;


import java.util.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="usercart")
public class UserCart {
@Id
private String userName;
private String productId;


private HashMap<String,Integer> productDeatils;

public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getProductId() {
	return productId;
}
public void setProductId(String productId) {
	this.productId = productId;
}

public HashMap<String, Integer> getProductDeatils() {
	return productDeatils;
}
public void setProductDeatils(HashMap<String, Integer> productDeatils) {
	this.productDeatils = productDeatils;
}

public UserCart(String userName, String productId, HashMap<String, Integer> productDeatils
		) {
	super();
	this.userName = userName;
	this.productId = productId;
	this.productDeatils = productDeatils;

}
public UserCart() {
	
}
}
