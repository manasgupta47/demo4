package com.orderhistory.entity;

import java.util.HashMap;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="orderhistory")
public class OrderHistory {
	@Id
	private String userName;
	private String productId;
	private String orderId;
	private HashMap<String,String> orderDeatils;
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
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public HashMap<String, String> getOrderDeatils() {
		return orderDeatils;
	}
	public void setOrderDeatils(HashMap<String, String> orderDeatils) {
		this.orderDeatils = orderDeatils;
	}
	public OrderHistory(String userName, String productId, String orderId, HashMap<String, String> orderDeatils) {
		super();
		this.userName = userName;
		this.productId = productId;
		this.orderId = orderId;
		this.orderDeatils = orderDeatils;
	}
	public OrderHistory() {
		
	}
	

}
