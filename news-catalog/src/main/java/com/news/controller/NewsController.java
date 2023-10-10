package com.news.controller;

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
import com.news.entity.News;
import com.news.service.NewsService;

@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:4200")
public class NewsController {
@Autowired
private NewsService newsService;

/*public News addNewNews(@RequestParam(value="newsTitle",required=false) String newsTitle,@RequestParam(value="newsDescription",required=false)String newsDescription,@RequestParam(value="newsContent",required=false) String newsContent,@RequestParam(value="newsPublishDate",required=false) String newsPublishDate,@RequestParam(value="newsImage",required=false) MultipartFile newsImage)throws IOException{
	return newsService.addNewNews(newsTitle, newsDescription, newsContent, newsPublishDate, newsImage);
} */
@PostMapping({"/addNewNews"})
public News addNewNews(@RequestBody News news){
	return newsService.addNewNews(news);
}
@GetMapping({"/getAllNews"})
public Page<News> getAllNews(@RequestParam(defaultValue="0") int pageNumber,@RequestParam(defaultValue="") String searchKey){
	return newsService.getAllNews(pageNumber,searchKey);
}
@GetMapping("/{id}")
public News getNewsById(@PathVariable String id) {
	return newsService.getNewsById(id);
}
@DeleteMapping("/{id}")
public void deleteNews(@PathVariable String id) {
	newsService.deleteNews(id);
}
@PutMapping("/{id}")
public News updateNewsById(@PathVariable String id,@RequestBody News news) {
	return newsService.updateNewsById(id, news);
}
/*
@PutMapping("/{id}")
public News updateNewsById(@PathVariable String id,@RequestParam(value="newsTitle",required=false) String newsTitle,@RequestParam(value="newsDescription",required=false)String newsDescription,@RequestParam(value="newsContent",required=false) String newsContent,@RequestParam(value="newsPublishDate",required=false) String newsPublishDate,@RequestParam(value="newsImage",required=false) MultipartFile newsImage)throws IOException{
	return newsService.updateNewsById(id, newsTitle, newsDescription, newsContent, newsPublishDate, newsImage);
} */
}
