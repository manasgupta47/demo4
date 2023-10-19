package com.orderdetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.orderdetails.entity.OrderDeatails;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender javaMailSender;
	@Value("${spring.mail.username}") 
	private String sender;
public String sendSimpleMail(OrderDeatails orderDetails) {
try {
	String newLine=System.lineSeparator();
	String msg="Order Id : "+orderDetails.getOrderId() + newLine +
			   "Product Name : "+orderDetails.getProductName() + newLine +
			   "Customer Name : "+orderDetails.getCustomerName() + newLine +
			   "Phone Number : "+orderDetails.getPhoneNumber() + newLine +
			   "Email : "+orderDetails.getEmail() + newLine +
			   "Address : "+orderDetails.getAddress() + newLine +
			   "Amount : "+orderDetails.getAmount() + newLine ;
			   
	SimpleMailMessage mailMessage= new SimpleMailMessage();
	mailMessage.setFrom(sender);
	mailMessage.setTo(orderDetails.getEmail());
	mailMessage.setSubject("Bill Receipt");
	mailMessage.setText(msg);
	javaMailSender.send(mailMessage);
	return "Mail Sent Successfully...";
	
}
catch (Exception e) {
    return "Error while Sending Mail";
}



}
}
