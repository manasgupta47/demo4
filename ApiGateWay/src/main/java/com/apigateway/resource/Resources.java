package com.apigateway.resource;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.apigateway.Entity.Product;

@RestController
@CrossOrigin
public class Resources {
	@Autowired
	private RestTemplate restTemplate;
	@GetMapping("/{userName}")
	public List<Product> getProductFromUserName(@PathVariable("userName") String userName){
		HashMap<String, Integer> hm=new HashMap<String, Integer>();
		hm=restTemplate.getForObject("http://localhost:8905/usercart/getProductFromCart/"+userName,HashMap.class);
		List<Product> list=new ArrayList<Product>();
		for(String itemId:hm.keySet()) {
			Product productObj=restTemplate.getForObject("http://localhost:8901/product/"+itemId,Product.class);
		list.add(productObj);
		}
		return list;
	}
	
}
