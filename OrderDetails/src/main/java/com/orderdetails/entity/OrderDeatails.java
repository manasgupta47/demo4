package com.orderdetails.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="orderdetails")
public class OrderDeatails {
	@Id
private String orderId;
private String productName;
private String customerName;
private String email;
private String phoneNumber;
private String address;
private Double amount;
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}

public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public String getOrderId() {
	return orderId;
}
public void setOrderId(String orderId) {
	this.orderId = orderId;
}
public String getCustomerName() {
	return customerName;
}
public void setCustomerName(String customerName) {
	this.customerName = customerName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhoneNumber() {
	return phoneNumber;
}
public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}
public Double getAmount() {
	return amount;
}
public void setAmount(Double amount) {
	this.amount = amount;
}


}
