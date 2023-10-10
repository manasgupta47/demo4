package com.coupons.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.coupons.entity.Coupon;



@Repository
public interface CouponsDao extends MongoRepository<Coupon,String>{
	public Page<Coupon> findAll(Pageable pageable);
	public Page<Coupon> findByCouponNameContainingIgnoreCase(
			String key1,Pageable pageable);
}
