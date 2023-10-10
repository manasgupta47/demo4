package com.coupons.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.coupons.dao.CouponsDao;
import com.coupons.entity.Coupon;




@Service
public class CouponsService {
@Autowired
private CouponsDao couponsDao;

public Coupon addNewCoupon(Coupon coupon) {
	return couponsDao.save(coupon);
}
public Page<Coupon> getAllCoupons(int pageNumber,String searchKey){
	Pageable pageable=PageRequest.of(pageNumber,8);
	if(searchKey.equals("")) {
		return (Page<Coupon>) couponsDao.findAll(pageable);
	}
	else {
		return (Page<Coupon>) couponsDao.findByCouponNameContainingIgnoreCase(searchKey, pageable);
	}
	
}
public Coupon getCouponById(String id) {
	Coupon coupon=couponsDao.findById(id).get();
	return coupon;
}
public void deleteCouponById(String id) {
	couponsDao.deleteById(id);
}
public Coupon getCouponByCode(String couponCode) {
	List<Coupon> list=couponsDao.findAll();
	for(Coupon l:list) {
		if(l.getCouponCode().contains(couponCode)) {
			
			return l;
		}
	}
	return null;
}
public Coupon updateCouponByid(String id,Coupon coupon) {
	Coupon c=couponsDao.findById(id).get();
	c.setCouponName(coupon.getCouponName());
	c.setCouponCode(coupon.getCouponCode());
	c.setCouponLastDate(coupon.getCouponLastDate());
	c.setCouponValue(coupon.getCouponValue());
	c.setCouponImage(coupon.getCouponImage());
	return couponsDao.save(c);
}
/*
public Coupon updateCouponByid(String id,String couponName,String couponCode,String couponLastDate,MultipartFile couponImage)throws IOException {
Coupon coupon=couponsDao.findById(id).get();
byte[] imageBytes = couponImage.getBytes();
coupon.setCouponName(couponName);
coupon.setCouponCode(couponCode);
coupon.setCouponLastDate(couponLastDate);
coupon.setCouponImage(imageBytes);
return couponsDao.save(coupon);
}
*/
}
