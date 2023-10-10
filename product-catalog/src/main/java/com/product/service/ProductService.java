package com.product.service;


import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.product.dao.ProductDao;
import com.product.entity.Product;
@Service
public class ProductService {
	@Autowired
	private ProductDao productDao;
public Product addNewProduct(Product product) {
		return productDao.save(product);
	}
public Page<Product> getAllProducts( int pageNumber,String searchKey){
	Pageable pageable=PageRequest.of(pageNumber,8);
	if(searchKey.equals("")) {
		return (Page<Product>) productDao.findAll(pageable);
	}
	else {
		return (Page<Product>) productDao.findByProductNameContainingIgnoreCaseOrProductDescriptionContainingIgnoreCase(searchKey, searchKey, pageable);
	}
	
}
public Product getProductById(String id) {
	Product product=productDao.findById(id).get();
	return product;
}

public Product updateProductById(String id,Product product){
	Product p=productDao.findById(id).get();
	
	p.setProductName(product.getProductName());
	p.setProductDescription(product.getProductDescription());
	p.setProductActualPrice(product.getProductActualPrice());
	p.setProductDiscountedPrice(product.getProductDiscountedPrice());
	p.setProductImage(product.getProductImage());
	return productDao.save(p);
} 
public void deleteProduct(String id) {
	productDao.deleteById(id);
}

}
