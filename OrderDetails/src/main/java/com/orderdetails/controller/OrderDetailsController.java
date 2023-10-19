package com.orderdetails.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orderdetails.entity.OrderDeatails;
import com.orderdetails.service.EmailService;
import com.orderdetails.service.OrderDetailsService;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderDetailsController {
	 @Autowired 
	 private EmailService emailService;
	@Autowired
	private OrderDetailsService orderDetailsService;
	@PostMapping("/addorderDetails")
	public OrderDeatails addOrderDetails(@RequestBody OrderDeatails orderDetails) {
		return orderDetailsService.addOrderDetails(orderDetails);
	}
	@GetMapping("/getorderdetails/{orderId}")
	public OrderDeatails getOrderDetails(@PathVariable String orderId) {
		return orderDetailsService.getOrderDetails(orderId);
	}
	@GetMapping("/getallorderdetails")
	public List<OrderDeatails> getAllOrderDetails() {
		return orderDetailsService.getAllOrderDetails();
	}
	@PostMapping("/sendMail")
	public String sendMail(@RequestBody OrderDeatails orderDetails) {
		 String status= emailService.sendSimpleMail(orderDetails);
     return status;
	}
	
}
