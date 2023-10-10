package com.news;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient

public class NewsCatalogApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsCatalogApplication.class, args);
	}
	

}
