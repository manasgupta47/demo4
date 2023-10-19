package com.orderhistory.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.orderhistory.dao.OrderHistoryDao;
import com.orderhistory.entity.OrderHistory;

@Service
public class OrderHistoryService {
	@Autowired
	private OrderHistoryDao orderHistoryDao;
	public OrderHistory addOrderHistory(OrderHistory orderHistory) {
		Optional<OrderHistory> obj=orderHistoryDao.findById(orderHistory.getUserName());

		if(obj.isEmpty()) {
			HashMap<String,String> hm=new HashMap<>();
			hm.put(orderHistory.getOrderId(),orderHistory.getProductId());
			orderHistory.setOrderDeatils(hm);
			return orderHistoryDao.save(orderHistory);
		}
		else {
			HashMap<String,String> hm=obj.get().getOrderDeatils();
			for (Map.Entry<String,String> entry : hm.entrySet())  
	            System.out.println("Key = " + entry.getKey() + 
	                             ", Value = " + entry.getValue()); 
			hm.put(orderHistory.getOrderId(),orderHistory.getProductId());
			orderHistory.setOrderDeatils(hm);
			return orderHistoryDao.save(orderHistory);
		}
	}
	public HashMap<String,String> getOrderHistory(String userName){
		return orderHistoryDao.findById(userName).get().getOrderDeatils();
	}
}
