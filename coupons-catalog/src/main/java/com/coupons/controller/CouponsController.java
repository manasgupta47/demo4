package com.coupons.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.coupons.entity.Coupon;
import com.coupons.service.CouponsService;


@RestController
@RequestMapping("/coupons")
@CrossOrigin(origins = "http://localhost:4200")
public class CouponsController {
@Autowired
private CouponsService couponsService;
@PostMapping({"/addNewCoupon"})
public Coupon addNewCoupon(@RequestBody Coupon coupon){
	return couponsService.addNewCoupon(coupon);
}
@GetMapping({"/getAllCoupons"})
public Page<Coupon> getAllCoupons(@RequestParam(defaultValue="0") int pageNumber,@RequestParam(defaultValue="") String searchKey){
	return couponsService.getAllCoupons(pageNumber,searchKey);
}
@GetMapping("/{id}")
public Coupon getCouponById(@PathVariable String id) {
	return couponsService.getCouponById(id);
}
@DeleteMapping("/{id}")
public void deleteCouponById(@PathVariable String id) {
	couponsService.deleteCouponById(id);
}
@PutMapping("/{id}")
public Coupon updateCouponByid(@PathVariable String id,@RequestBody Coupon coupon) {
	return couponsService.updateCouponByid(id, coupon);
}
@GetMapping({"/code/{couponCode}"})
public Coupon getCouponByCode(@PathVariable String couponCode) {
	return couponsService.getCouponByCode(couponCode);
}
/*
@PutMapping("/{id}")
public Coupon updateCouponByid(@PathVariable String id,@RequestParam(value="couponName",required=false) String couponName,@RequestParam(value="couponCode",required=false)String couponCode,@RequestParam(value="couponLastDate",required=false) String couponLastDate,@RequestParam(value="couponImage",required=false) MultipartFile couponImage)throws IOException{
return couponsService.updateCouponByid(id, couponName, couponCode, couponLastDate, couponImage);
} */
}
