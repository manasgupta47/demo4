package com.coupons.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="coupons")
public class Coupon {
@Id
private String couponId;
private String couponName;
private String couponCode;
private String couponLastDate;
private String couponValue;
private String couponImage;

public Coupon(String couponId, String couponName, String couponCode,String couponValue, String couponLastDate, String couponImage) {
	super();
	this.couponId = couponId;
	this.couponName = couponName;
	this.couponCode = couponCode;
	this.couponLastDate = couponLastDate;
	this.couponImage = couponImage;
	this.couponValue=couponValue;
}

public String getCouponValue() {
	return couponValue;
}

public void setCouponValue(String couponValue) {
	this.couponValue = couponValue;
}

public String getCouponImage() {
	return couponImage;
}
public void setCouponImage(String couponImage) {
	this.couponImage = couponImage;
}
public String getCouponId() {
	return couponId;
}
public void setCouponId(String couponId) {
	this.couponId = couponId;
}
public String getCouponName() {
	return couponName;
}
public void setCouponName(String couponName) {
	this.couponName = couponName;
}
public String getCouponCode() {
	return couponCode;
}
public void setCouponCode(String couponCode) {
	this.couponCode = couponCode;
}
public String getCouponLastDate() {
	return couponLastDate;
}
public void setCouponLastDate(String couponLastDate) {
	this.couponLastDate = couponLastDate;
}


}
