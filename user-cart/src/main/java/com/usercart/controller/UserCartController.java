package com.usercart.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.usercart.entity.UserCart;
import com.usercart.service.UserCartService;

@RestController
@RequestMapping("/usercart")
@CrossOrigin(origins = "http://localhost:4200")
public class UserCartController {
@Autowired
private UserCartService userCartService;

@PostMapping("/addproductIncart")
public String addProductToCart(@RequestBody UserCart userCart) {
	userCartService.addproductInCart(userCart);
	return "Added";
}
@GetMapping("/removeproduct/{userName}/{productId}")
public UserCart removeProductToCart(@PathVariable String userName,@PathVariable String productId) {
	return userCartService.removeproductFromCart(userName, productId);
	 
}
@GetMapping("/getProductFromCart/{userName}")
public HashMap<String,Integer> getProductFromCart(@PathVariable String userName) {
	 return userCartService.getProductFromCart(userName);
}
@GetMapping("/getProductById/{userName}/{productId}")
public boolean getProductById(@PathVariable String userName,@PathVariable String productId) {
	return userCartService.getprocuctByid(userName, productId);
}
}
