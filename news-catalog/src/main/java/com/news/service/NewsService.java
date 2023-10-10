package com.news.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.news.dao.NewsDao;
import com.news.entity.News;



@Service
public class NewsService {
@Autowired
private NewsDao newsDao;

public News addNewNews(News news) {
	return newsDao.save(news);
}
public Page<News> getAllNews(int pageNumber,String searchKey){
	Pageable pageable=PageRequest.of(pageNumber,8);
	if(searchKey.equals("")) {
		return (Page<News>) newsDao.findAll(pageable);
	}
	else {
		return (Page<News>) newsDao.findByNewsTitleContainingIgnoreCaseOrNewsDescriptionContainingIgnoreCase(searchKey, searchKey, pageable);
	}
	
}
public News getNewsById(String id) {
	News news=newsDao.findById(id).get();
	return news;
}
public void deleteNews(String id) {
	newsDao.deleteById(id);
}
public News updateNewsById(String id,News news) {
	News n=newsDao.findById(id).get();
	n.setNewsTitle(news.getNewsTitle());
	n.setNewsDescription(news.getNewsDescription());
	n.setNewsContent(news.getNewsContent());
	n.setNewsPublishDate(news.getNewsPublishDate());
	n.setNewsImage(news.getNewsImage());
	return newsDao.save(n);
}
/*
public News updateNewsById(String id,String newsTitle,String newsDescription,String newsContent,String newsPublishDate,MultipartFile newsImage) throws IOException {
	News news=newsDao.findById(id).get();
	byte[] imageBytes = newsImage.getBytes();
	news.setNewsTitle(newsTitle);
	news.setNewsDescription(newsDescription);
	news.setNewsContent(newsContent);
	news.setNewsPublishDate(newsPublishDate);
	news.setNewsImage(imageBytes);
	return newsDao.save(news);
}
*/
}
