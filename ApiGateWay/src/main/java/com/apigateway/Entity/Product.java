package com.apigateway.Entity;

public class Product {
	private String productId;
	private String productName;
	private String productDescription;
	private Double productDiscountedPrice;
	private Double productActualPrice;
	private String productImage;

	public Product() {
	}

	public Product(String productId, String productName, String productDescription, Double productDiscountedPrice,
			Double productActualPrice, String productImage) {
		
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productDiscountedPrice = productDiscountedPrice;
		this.productActualPrice = productActualPrice;
		
		this.productImage = productImage;
	}

	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public Double getProductDiscountedPrice() {
		return productDiscountedPrice;
	}
	public void setProductDiscountedPrice(Double productDiscountedPrice) {
		this.productDiscountedPrice = productDiscountedPrice;
	}
	public Double getProductActualPrice() {
		return productActualPrice;
	}
	public void setProductActualPrice(Double productActualPrice) {
		this.productActualPrice = productActualPrice;
	}

	}


