package com.news.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.news.entity.News;


@Repository
public interface NewsDao extends MongoRepository<News,String>{
	public Page<News> findAll(Pageable pageable);
	public Page<News> findByNewsTitleContainingIgnoreCaseOrNewsDescriptionContainingIgnoreCase(
			String key1, String key2,Pageable pageable);
}
