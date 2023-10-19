package com.orderhistory.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orderhistory.entity.OrderHistory;
import com.orderhistory.service.OrderHistoryService;

@RestController
@RequestMapping("/orderhistory")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderHistoryController {
	@Autowired
	private OrderHistoryService orderHistoryService;
	@PostMapping({"/addOrderHistory"})
	public OrderHistory addOrderHistory(@RequestBody OrderHistory orderHistory) {
		return orderHistoryService.addOrderHistory(orderHistory);
	}
	@GetMapping("/getorderhistory/{userName}")
	public HashMap<String,String> getOrderHistory(@PathVariable String userName){
		return orderHistoryService.getOrderHistory(userName);
	}
}
