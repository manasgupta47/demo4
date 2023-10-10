package com.product.controller;

import java.util.List;

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
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.product.entity.Product;
import com.product.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService productService;

	@PostMapping(value={"/addNewProduct"})
	public Product addNewProduct(@RequestBody Product product) {
		return productService.addNewProduct(product);
	}
	@GetMapping("/getAllProducts")
	public Page<Product> getAllProduct(@RequestParam(defaultValue="0") int pageNumber,@RequestParam(defaultValue="") String searchKey){
		return productService.getAllProducts(pageNumber,searchKey);
	}
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable String id) {
		return productService.getProductById(id);
	}
	
	@PutMapping("/{id}")
	public Product updateProductById(@PathVariable String id,@RequestBody  Product product) {
		return productService.updateProductById(id, product);
	} 
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable String id) {
		productService.deleteProduct(id);
	}
	
}
