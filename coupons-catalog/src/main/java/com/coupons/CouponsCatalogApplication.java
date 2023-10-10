package com.coupons;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CouponsCatalogApplication {

	public static void main(String[] args) {
		SpringApplication.run(CouponsCatalogApplication.class, args);
	}

}
