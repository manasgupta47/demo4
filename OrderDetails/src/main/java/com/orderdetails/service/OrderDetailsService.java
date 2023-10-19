package com.orderdetails.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orderdetails.dao.OrderDetailsDao;
import com.orderdetails.entity.OrderDeatails;

@Service
public class OrderDetailsService {
	@Autowired
	private OrderDetailsDao orderDetailsDao;
	public OrderDeatails addOrderDetails(OrderDeatails orderDetails) {
		return orderDetailsDao.save(orderDetails);
	}
	public OrderDeatails getOrderDetails(String orderId) {
		return orderDetailsDao.findById(orderId).get();
	}
	public List<OrderDeatails> getAllOrderDetails(){
		return orderDetailsDao.findAll();
	}

}
